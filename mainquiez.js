const quizData = [
    {
        question: "What command clears the contents of your terminal display?",
        a: "Clear",
        b: "Catch",
        c: "Delete",
        d: "Remove",
        correct: "a",
    },
    {
        question: "What is the command to delete a file?",
        a: "Rm",
        b: "Rk",
        c: "Rc",
        d: "Dl",
        correct: "a",
    },
    {
        question: "What command is used to change directories?s",
        a: "Dc",
        b: "Cdc",
        c: "Cd",
        d: "None of these",
        correct: "c",
    },
    {
        question: "What command is used to get the IP address of all interfaces on a server?",
        a: "Ipp",
        b: "Ip2",
        c: "Ippp",
        d: "None of these",
        correct: "d",
    },
    {
        question: "What command is used to change ownership of a file?",
        a: "Chawn",
        b: "Chown",
        c: "Chan",
        d: "Cd chown",
        correct: "b",
    },
    
    {
        question: "What command is used to copy a file?",
        a: "Px",
        b: "Xp",
        c: "Cp",
        d: "None of these",
        correct: "c",
    },
    
    {
        question: "What command shows you how long it has been since the server was rebooted?",
        a: "Cd chown",
        b: "Downtime",
        c: "Uptime",
        d: "Ipp",
        correct: "c",
    },
    
    
      {
        question: "What command shows you what directory you are in?",
        a: "Ppx",
        b: "Px",
        c: "Wpd",
        d: "Pwd",
        correct: "d",
    },
    
    
      {
        question: "What command creates an empty directory?",
        a: "Mkdir",
        b: "Ipp",
        c: "Cd chown",
        d: "None of these",
        correct: "a",
    },
    
    
      {
        question: "Which command(s) show users that are logged in?",
        a: "Px",
        b: "Who",
        c: "Remove",
        d: "Catch",
        correct: "b",
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