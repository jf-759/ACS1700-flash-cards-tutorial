import data from './data.js'

const { title, description, questions } = data

const titleH1 = document.querySelector('#title')
    console.log(titleH1)

const descriptionP = document.querySelector('#description')

descriptionP.innerHTML = data.description

const scoreP = document.querySelector('#score')

const questionContainer = document.querySelector('#flip-card')

const qCardP = document.querySelector('#q-card > p')
const aCardP = document.querySelector('#a-card > p')

let questionIndex = -1

const showNextQuestion = () => {
    questionIndex += 1
    questionIndex = questionIndex % (questions.length - 0)
    qCardP.innerHTML = questions[questionIndex].q
    aCardP.innerHTML = questions[questionIndex].a
  
    scoreP.innerHTML = `Score ${questionIndex + 1}/${questions.length - 0}`
  }
  
  showNextQuestion(); 

document.body.addEventListener('click', e => {
    console.log(e)
  if (e.target.matches('#answer-button')) {
    questionContainer.classList.add('flip')
  } else if (e.target.matches('#question-button')) {
    questionContainer.classList.remove('flip')
  } else if (e.target.matches('#next-button')) {
    questionContainer.classList.remove('flip')
    showNextQuestion()
  }
})