import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
{
  /* The following line can be included in your src/index.js or App.js file */
}
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button , Navbar , Container , Nav} from 'react-bootstrap'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
      <h1>Portfolio</h1>
      <Button variant="primary">Primary</Button>{' '}
       <Button variant="success">Success</Button>
      <div className="card">
        
        <p>
          Hi, I am Mike, a web developer!
        </p>
      </div>
      
    </>
  )
}

export default App
