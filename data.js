const titleH1 = document.querySelector('#title')

const data = {
    "title":"Cats Flashcards",
    "description":"These Flashcards ask a series of questions to test your knowledge of cats!",
    "questions":[
      {"q":"The scientific name for cat is?", "a":"Felis catus"},
      {"q":"People who make cats their hobby are known as?", "a":"Cat fanciers"},
      {"q":"The latin word for cat?","a":"cattus"},
    ]
  }
  titleH1.innerHTML = data.title
  export default data