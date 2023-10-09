import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    

    <>
  <ul>
    <div>
      <li>
        <a href="#home">
          <b>Home</b>
        </a>
      </li>
      <li>
        <a href="#carrers">
          <b>Careers</b>
        </a>
      </li>
      <div className="right">
        <li>
          <a href="#about">
            <b>About</b>
          </a>
        </li>
      </div>
    </div>
  </ul>
  <form>
    <datalist id="Gender">
      <option value="Female" />
      <option value="Male" />
    </datalist>
    <table align="center" cellPadding="25px">
      <tbody>
        <tr>
          <td />
          <td align="center">
            <img src="x.jpg" width="150px" height="150px" />
          </td>
          <td />
        </tr>
        <tr>
          <td>
            <label className="mylabel">Email</label>
            <br />
            <input className="mytextbox" type="text" placeholder="INPUT" />
          </td>
          <td />
          <td>
            <label className="mylabel">User Name</label>
            <br />
            <input type="text" className="mytextbox" placeholder="INPUT" />
          </td>
        </tr>
        <tr>
          <td>
            <label className="mylabel">Gender</label>
            <br />
            <input
              type="text"
              className="mytextbox"
              list="Gender"
              name="Gender"
              id="Gender"
              placeholder="Select from dropdown"
            />
          </td>
          <td />
          <td>
            <label className="mylabel">Password</label>
            <br />
            <input
              type="text"
              className="mytextbox"
              placeholder="Password Input"
            />
          </td>
        </tr>
        <tr>
          <td colSpan={3} align="center">
            <button className="button" type="submit" formAction="Figma2.Html">
              SUBMIT
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
  <footer>
  <p text align="center">xyenta solutions @ 2022</p>
  </footer>

</>




  )
}

export default App
