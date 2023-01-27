const quizData = [
    {
        question: "Point out the correct statement.",
        a: "If equations are known but the parameters are not, they may be inferred with data analysis",
        b: "If equations are not known but the parameters are, they may be inferred with data analysis",
        c: "If equations and parameter are not, they may be inferred with data analysis",
        d: "None of the mentioned",
        correct: "a",
    },
    {
        question: " Which of the following is the top most important thing in data science?",
        a: "answer",
        b: "question",
        c: "data",
        d: "none of the mentioned",
        correct: "b",
    },
    
    {
        question: "Which of the following approach should be used if you can’t fix the variable?",
        a: "randomize it",
        b: "non stratify it",
        c: "generalize it",
        d: "none of the mentioned",
        correct: "a",
    },
    
     {
        question: "Point out the wrong statement.",
        a: "Randomized studies are not used to identify causation",
        b: "Complication approached exist for inferring causation",
        c: "Causal relationships may not apply to every individual",
        d: "All of the mentioned",
        correct: "a",
    },
    
    
     {
        question: "Which of the following is a good way of performing experiments in data science?",
        a: "Measure variability",
        b: "Have ReplicationGeneralize to the problem",
        c: "Generalize to the problem",
        d: "All of the mentioned",
        correct: "d",
    },
    
    
     {
        question: "Which of the following is commonly referred to as ‘data fishing’?",
        a: "Data bagging",
        b: "Data booting",
        c: "Data merging",
        d: "None of the mentioned",
        correct: "d",
    },
    
    
     {
        question: "Which of the following data mining technique is used to uncover patterns in data?",
        a: "Data bagging",
        b: "Data booting",
        c: "Data merging",
        d: "Data Dredging",
        correct: "d",
    },
    
    
     {
        question: "Point out the correct statement.",
        a: "Raw data is original source of data",
        b: "Preprocessed data is original source of data",
        c: "Raw data is the data obtained after processing steps",
        d: "None of the mentioned",
        correct: "a",
    },
    
    
     {
        question: "Which of the following is performed by Data Scientist?",
        a: "Define the question",
        b: "Create reproducible code",
        c: "Challenge results",
        d: "All of the mentioned",
        correct: "d",
    },
    
    
     {
        question: "Which of the following is performed by Data Scientist?",
        a: "Define the question",
        b: "Create reproducible code",
        c: "Challenge results",
        d: "All of the mentioned",
        correct: "d",
    },
    
    
     {
        question: "Which of the following is the most important language for Data Science?",
        a: "Java",
        b: "Ruby",
        c: "R",
        d: "None of the mentioned",
        correct: "c",
    },
    
    
     {
        question: "Point out the wrong statement.",
        a: "Merging concerns combining datasets on the same observations to produce a result with more variables",
        b: "Data visualization is the organization of information according to preset specifications",
        c: "Subsetting can be used to select and exclude variables and observations",
        d: "All of the mentioned",
        correct: "b",
    },
    
    
     {
        question: "Which of the following approach should be used to ask Data Analysis question?",
        a: "Find only one solution for particular problem",
        b: "Find out the question which is to be answered",
        c: "Find out answer from dataset without asking question",
        d: "None of the mentioned",
        correct: "b",
    },
    
    
     {
        question: "Which of the following is one of the key data science skills?",
        a: "Statistics",
        b: "Machine Learning",
        c: "Data Visualization",
        d: "All of the mentioned",
        correct: "d",
    },
    
    
     {
        question: "Which of the following is a key characteristic of a hacker?",
        a: "Afraid to say they don’t know the answer",
        b: "Willing to find answers on their own",
        c: "Not Willing to find answers on their own",
        d: "All of the mentioned",
        correct: "b",
    },
    
    
     {
        question: "Which of the following is characteristic of Processed Data?",
        a: "Data is not ready for analysis",
        b: "All steps should be noted",
        c: "Hard to use for data analysis",
        d: "None of the mentioned",
        correct: "b",
    },
    
    
     {
        question: "Raw data should be processed only one time.",
        a: "True",
        b: "False",
       
        correct: "b",
    },
    
    
     {
        question: "Which of the following characteristic of big data is relatively more concerned to data science?",
        a: "Velocity",
        b: "Variety",
        c: "Volume",
        d: "None of the mentioned",
        correct: "b",
    },
    
    
     {
        question: "Which of the following analytical capabilities are provided by information management company?",
        a: "Stream Computing",
        b: "Content Management",
        c: "Information Integration",
        d: "All of the mentioned",
        correct: "d",
    },
    
     {
        question: "Point out the wrong statement.",
        a: "The big volume indeed represents Big Data",
        b: "The data growth and social media explosion have changed how we look at the data",
        c: "Big Data is just about lots of data",
        d: "All of the mentioned",
        correct: "c",
    },
    
    
    {
        question: " Which of the following step is performed by data scientist after acquiring the data?",
        a: "Data Cleansing",
        b: "Data Integration",
        c: "Data Replication",
        d: "All of the mentioned",
        correct: "a",
    },
    
    
    
    {
        question: "3V’s are not sufficient to describe big data.",
        a: "True",
        b: " False",
        
        correct: "a",
    },
    
    
    
    {
        question: "Which of the following focuses on the discovery of (previously) unknown properties on the data?",
        a: "Data mining",
        b: "Big Data",
        c: "Data wrangling",
        d: "Machine Learning",
        correct: "a",
    },
    
    
    
    {
        question: "Raw data should be processed only one time.",
         a: "True",
        b: " False",
        
        correct: "b",
    },
    
    
    
    {
        question: "Which of the following is an example of graphics device?",
        a: "PDF",
        b: "SVG",
        c: "JPEG",
        d: "d) All of the mentioned",
        correct: "d",
    },
    
   
    
    
     
    
    
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})