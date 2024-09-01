import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {StateTutorial} from "./components/hooks/StateTutorial.jsx";

function App() {

  return (
    <>
      <div className="card">
            <StateTutorial></StateTutorial>
      </div>
    </>
  )
}

export default App
