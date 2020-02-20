import requests
import re
import Generate_questions
def return_question(material_id = 39435, n_questions = 5):
    PLATFORM_URL = "https://platform.x5gon.org/api/v1"
    get_specific_materials_endpoint = "/oer_materials/{}"
    response = requests.get(PLATFORM_URL + get_specific_materials_endpoint.format(material_id))
    r_json = response.json()
    text =r_json["oer_materials"]['description']
    text = re.sub(r'\w+:\/{2}[\d\w-]+(\.[\d\w-]+)*(?:(?:\/[^\s/]*))*', '', text)
    text = ''.join( c for c in text if  c not in '*[]|//<>\\')
    text.strip('\n').strip('\r')
    questions = Generate_questions.generateQuestions(text,n_questions)
    
    for i in questions:
        i['question'] =  i['question'].replace('\r\n', '')
        i['answer'] = i['answer'].lower()

    
    return questions