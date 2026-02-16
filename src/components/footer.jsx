import '../styles/global.css'
import gitIcon from '../assets/github.svg';
import '../styles/footer.css'


function footer() {
  return (
    <>
      <footer className="footer">
        <li>
          <a href='https://github.com/ReeveWorks'><img src={gitIcon} alt="github" className="github"/>Hi! Click to check my GitHub Account!</a>
        </li>
      </footer>
    </>
  )
}

export default footer