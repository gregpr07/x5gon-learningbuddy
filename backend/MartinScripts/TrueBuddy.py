import itertools
import math
import trueskill as t
import numpy as np
import json
import requests

normalizer = 0.5

def return_topic_dificulty(material_id, n_topics = 10):
    headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
    }

    data ='{ "resource_ids": ['+str(material_id)+'], "wikification_type": "SIMPLE"}'

    response = requests.post('http://wp3dev.x5gon.org/distance/wikifier/fetch', headers=headers, data=data)
    try:
        concepts = json.loads(response.content.decode())['output'][0]['value']['concepts']
        concepts_dificulties = {i['title']:i['cosine'] for i in concepts}
        
        return {k: v for k, v in sorted(concepts_dificulties.items(), key=lambda item: item[1])[::-1][:n_topics]}

    except:
        return response

    
def compare_students_on_playlist(student1, student2, playlist):
    score1 = 0
    score2 = 0
    for i in playlist:
        score1 = score1 + student1.predict_proba(i)
        score2 = score2 + student2.predict_proba(i)
    return score1 - score2
    
class TrueBuddy_learner:
    def __init__(self, starting_skill = 0, starting_var = (25/3), BETA = 25/6, inf = 1/1000):
        #starting skill is defenitly 0, starting var has to be determined
        self.st_skill = starting_skill
        self.st_var = starting_var
        self.BETA = BETA
        self.learners = {}
        self.inf = inf
        
    
    def compare_score(self, student):
        return self.win_probability([v for v in self.learners.values()],[v for v in student.learners.values()])
    
    
    def update_skills(self, material_id, feedback):
        skills = return_topic_dificulty(material_id)
        for skill in skills.keys():
            if skill in self.learners:
                pass
            else:
                self.learners[skill] = t.Rating(self.st_skill,self.st_var)
        active_list = [self.learners[skill] for skill in skills.keys()]
        
        resource_list = [t.Rating(skills[skill],self.inf) for skill in skills.keys()]
        #print(resource_list)
        
        if feedback == 1:
            active_list, resource_list = t.rate([active_list,resource_list],ranks=[0,1])
        elif feedback == 0:
            active_list, resource_list = t.rate([active_list,resource_list],ranks=[1,0])
        else:
            raise ValueError('feedback can only be 1 or 0')
        
        #print(active_list)
        
        skill_list = list(skills.keys())
        for i in range(len(skill_list)):
            self.learners[skill_list[i]] = active_list[i]
        
        return None

    def win_probability(self,team1, team2):
        delta_mu = sum(r.mu for r in team1) - sum(r.mu for r in team2)
        sum_sigma = sum(r.sigma ** 2 for r in itertools.chain(team1, team2))
        size = len(team1) + len(team2)
        denom = math.sqrt(size * (self.BETA * self.BETA) + sum_sigma)
        ts = t.global_env()
        return ts.cdf(delta_mu / denom)

    
    
    
    
    
    def predict_proba(self,material_id):
        skills = return_topic_dificulty(material_id)
        for skill in skills.keys():
            if skill in self.learners:
                pass
            else:
                self.learners[skill] = t.Rating(self.st_skill,self.st_var)
        active_list = [self.learners[skill] for skill in skills.keys()]
        
        resource_list = [t.Rating(skills[skill],self.inf) for skill in skills.keys()]
        #print(resource_list)
        
        return(self.win_probability(active_list,resource_list))
        
    
    def predict(self,material_id):
        win_proba = self.predict_proba(material_id)
        
        return(1 if win_proba >= 0.5 else 0)


if __name__ == '__main__':
    #basic unit tests
    print('TODO')
        