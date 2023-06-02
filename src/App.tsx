import { useTitle } from './hooks/useTitle';
import QR from './assets/image-qr-code.png';
import './App.css';

function App() {

  useTitle()

  return (
    <>
      <div className='container'>
        <div className='contentContainer'>
          <img className='image' src={QR} alt="" />
          <h3 className='title'>
            Improve your front-end
            <span className='line-break'></span>
            skills by building projects</h3>
          <p className='text'>
            Scan the QR code to visit Frontend
            Mentor and take your coding skills to
            the next level
          </p>
        </div>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Santiago Muscolo</a>.
        </div>
      </div>
    </>
  )
}

export default App
