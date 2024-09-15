import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {StateTutorial} from "./components/hooks/StateTutorial.jsx";
import { ReducerTutorial } from './components/hooks/ReducerTutorial.jsx';
import { EffectTutorial } from './components/hooks/EffectTutorial.jsx';
import { RefTutorial } from "./components/hooks/RefTutorial.jsx";
import { LayoutEffectTutorial } from './components/hooks/LayoutEffectTutorial.jsx';

function App() {

  return (
    <>
      <div className="card">
            <LayoutEffectTutorial name={"Nimal"} Age={34}/>
      </div>
    </>
  )
}

export default App
