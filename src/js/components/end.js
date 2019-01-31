import { h } from 'jsx-dom' // eslint-disable-line no-use-before-define
import * as React from 'jsx-dom'
import bem from 'bem-names'
import { userLogin } from '../modules/firebase'
import router from '../modules/router'
import ddNewQuestionsetToFirestore from '../modules/firebase'

const End = ({children, ...props}) => {
let correct_questions = JSON.parse(localStorage.getItem('scores'))
let questions_total = window.questions.length;
let number_of_players = correct_questions.length;
let button1_text = 'View statistic!'
let button2_text = 'Play again!'
let button3_text = 'Challenge a friend!'
let result=''
let logged_in=window.user;

const resultContainer = document.querySelector('.end__div')
console.log("BAGUETTE",window.questions)
let checkIfNumber = (number) => {
  if(number != null) { return number }
  else { return 0 }
}

function sendChallenge(){
  let questionarr
  let answerarr
  for(let i =0; i < questions_total; i++)
  {
    questionarr=window.questions[i].question
    answerarr=[window.questions[i].correct_answers,window.questions[i].incorrect_answers[0],window.questions[i].incorrect_answers[1],window.questions[i].incorrect_answers[2]]
  }
  let user=window.user
  let challenger='Benjamin Joham'
  AddNewQuestionsetToFirestore = (questionarr, answerarr, user, challenger)
}

let getContent = () =>  {
let add
  if(number_of_players==1){   //singleplayer
    if (logged_in)  {add=addButtons()}
    result='You answered '+ checkIfNumber(correct_questions[0])  +'/'+questions_total+' Questions correct.'
    return (
      <div className={bem('end','div')}>
        <h2 className={bem('end','h2')}>{result}</h2>
        {add}
      </div>
    )
  }
  else {    //multiplayer
    let content = <div className={bem('end','div')}></div>
      for(let i = 1; i <= number_of_players; i++)
      {
          result = 'Player '+ i +' answered ' + checkIfNumber(correct_questions[i-1]) +'/'+questions_total+' Questions correct.'
          content.appendChild(<h2 className={bem('end','h2')}>{result}</h2>)
      }
      return content
  }
}

let addButtons = () => {
    if(logged_in){
      return (
        <div>
        <button className={bem('button')} onClick={() => router.navigate('/profile')}>
        {button1_text}
      </button>
        <button className={bem('button')} onClick={() => sendChallenge()}>
        {button3_text}
      </button>
      </div>
      )
    }
}

  return (
    <section className={bem('end')}>
    <h1 className={bem('end','h1')}>You finished the Quiz!</h1>
    {getContent()}
      <button className={bem('button')}
        onClick={() => {
        localStorage.removeItem('scores')
        router.navigate('/start')
        }
      }>
        {button2_text}
      </button>
    </section>
  )
}

export default End
