import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {StateTutorial} from "./components/hooks/StateTutorial.jsx";
import { ReducerTutorial } from './components/hooks/ReducerTutorial.jsx';
import { EffectTutorial } from './components/hooks/EffectTutorial.jsx';
import { RefTutorial } from "./components/hooks/RefTutorial.jsx";

function App() {

  return (
    <>
      <div className="card">
            <RefTutorial/>
      </div>
    </>
  )
}

export default App
