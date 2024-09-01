import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {StateTutorial} from "./components/hooks/StateTutorial.jsx";
import { ReducerTutorial } from './components/hooks/ReducerTutorial.jsx';

function App() {

  return (
    <>
      <div className="card">
            <ReducerTutorial></ReducerTutorial>
      </div>
    </>
  )
}

export default App
