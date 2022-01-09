const questionList=[
    {
        ques_id:1,
        question:"Which state produces maximum soybean1?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },
    {
        ques_id:2,
        question:"Which state produces maximum soybean2?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },
    {
        ques_id:3,
        question:"Which state produces maximum soybean3?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },
    {
        ques_id:4,
        question:"Which state produces maximum soybean4?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },{
        ques_id:5,
        question:"Which state produces maximum soybean5?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },
    {
        ques_id:6,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },{
        ques_id:7,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },{
        ques_id:8,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },
    {
        ques_id:9,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    },
    {
        ques_id:10,
        question:"Which state produces maximum soybean?",
        options:"[\"Madhya Pradesh\",\"Uttar Pradesh\",\"Bihar\",\"Rajasthan\"]",
        correctAnswere:"[\"Madhya Pradesh\"]"
    }
]

const quizList=[
    {"exam":"RRB Ntpc Cbt 1","subjects":["Hindi","English","History","Current Affairs","General Science"]},
    {"exam":"RRB Group D","subjects":["Hindi","English","History","Current Affairs","General Science"]},
    {"exam":"Railway Ntpc CBT 2","subjects":["Hindi","English","History","Current Affairs","General Science"]}
]
function getAnswereById(id){
    return questionList.find(question=>question.ques_id===id).correctAnswere
}
function getQuestionList(){
    return questionList.map((question,index)=>{
      return {"id":question.ques_id,"question":question.question,"options":question.options,status:0,answerd:-1}
    })
}
function getOnlyQuestionList(){
    return questionList.map((question,index)=>{
        return {"id":question.ques_id,"question":question.question}
    })
}
function getQuizList(){
    return quizList;
}
module.exports.getQuizList=getQuizList
module.exports.getQuestionList=getQuestionList
module.exports.getAnswereById=getAnswereById
module.exports.getOnlyQuestionList=getOnlyQuestionList