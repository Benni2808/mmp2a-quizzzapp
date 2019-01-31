import Header from '../components/header'
import { h } from 'jsx-dom' // eslint-disable-line no-use-before-define
import Quiz from '../components/quiz'

const QuizzScreen = (params) => {
  let amountOfQuestions = window.questions.length
  // console.log(amountOfQuestions)
  // console.log('params: ',params)

  // console.log('query: ',query)
  let queryData = params.query.split('&')
  // console.log(queryData)

  let multiplayer = queryData[0].split('=')[1]
  // console.log('mulitplayer: ', multiplayer)
  let player = queryData[1].split('=')[1]
  // console.log('player: ', player)
  let question = queryData[2].split('=')[1]
  // console.log('question: ', question)

  let activePlayer = queryData[3].split('=')[1]
  // console.log('ActivePlayer: ', activePlayer)

  // console.log(queryData[0])

  return (
    <div id='root'>
      <Header data='quiz' value={question + '/' + amountOfQuestions}/>
      <main>
        <Quiz multiplayer={multiplayer} amountPlayer={player} question={question} player={activePlayer}/>
      </main>
    </div>
  )
}
export default QuizzScreen
