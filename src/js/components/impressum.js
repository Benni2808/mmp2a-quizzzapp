import { h } from 'jsx-dom' // eslint-disable-line no-use-before-define
import bem from 'bem-names'

const Impressum = () => {
  return (
    <section id='impressum'className={bem('impressum')}>
      <h1 className={bem('h1')}>Impressum</h1>
      <p className={bem('p')}>Fachhochschule Salzburg</p>
      <p className={bem('p')}>MultiMediaTechnology</p>
      <p className={bem('p')}>This single page application was built by Benjamin Joham and Viktoria Maurer during the studio week for the MulitMediaProject 2a.</p>
      <p className={bem('p')}>The Questions are from <a href="https://opentdb.com/">Open Trivia DB</a>.</p>
      <a href='#profile' className={bem('impressum', 'a')}><i class="fas fa-arrow-up"></i></a>
    </section>
  )
}
export default Impressum
