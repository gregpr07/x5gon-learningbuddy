import trueskill as t
import TrueBuddy

def skill_to_parm(TrueSkillObject):
    parms = []
    for i in TrueSkillObject.learners.keys():
        parms.append([i, TrueSkillObject.learners[i].mu,TrueSkillObject.learners[i].sigma])
    return parms

def parm_to_skill(parms):
    skill = TrueBuddy.TrueBuddy_learner()
    for i in range(len(parms)):
        skill.learners[parms[i][0]] = t.Rating(parms[i][1],parms[i][2])
    return skill