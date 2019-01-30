import { h } from 'jsx-dom' // eslint-disable-line no-use-before-define
import bem from 'bem-names'

const clickhandlerPlayers = (event) => {
  console.log(event.target)
  let elem = event.target
  if (elem.id == 'btn_players_active') {
    elem.removeAttribute('id')
  } else {
    document.getElementById('btn_players_active').removeAttribute('id')
    elem.id = 'btn_players_active'
  }
}
const clickhandlerQuestions = (event) => {
  console.log(event.target)
  let elem = event.target
  if (elem.id == 'btn_questions_active') {
    elem.removeAttribute('id')
  } else {
    document.getElementById('btn_questions_active').removeAttribute('id')
    elem.id = 'btn_questions_active'
  }
}

const Settings = () => {
  return (
    <section class={bem('settings')}>
      <div class={bem('settings', 'div')}>
        <h1 class={bem('settings', 'h1')}>Number of Players</h1>
        <div class={bem('settings', 'div', ['players'])}>
          <button id='btn_players_active' class={bem('settings', 'button')} onClick={ clickhandlerPlayers } value='1'>1</button>
          <button class={bem('settings', 'button')} onClick={ clickhandlerPlayers } value='2'>2</button>
          <button class={bem('settings', 'button')} onClick={ clickhandlerPlayers } value='3'>3</button>
          <button class={bem('settings', 'button')} onClick={ clickhandlerPlayers } value='4'>4</button>
        </div>
      </div>
      <div class={bem('settings', 'div')}>
        <h1 class={bem('settings', 'h1')}>Number of Questions</h1>
        <div class={bem('settings', 'div', ['questions'])}>
          <button id='btn_questions_active' class={bem('settings', 'button')} onClick={ clickhandlerQuestions } value='5'>5</button>
          <button class={bem('settings', 'button')} onClick={ clickhandlerQuestions } value='10'>10</button>
          <button class={bem('settings', 'button')} onClick={ clickhandlerQuestions } value='15'>15</button>
          <button class={bem('settings', 'button')} onClick={ clickhandlerQuestions } value='20'>20</button>
        </div>
      </div>
    </section>
  )
}

export default Settings

// <p><button class="settings__button">1</button><button class="settings__button">2</button></p>
// <p><button class="settings__button">3</button><button class="settings__button">4</button></p>
