import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {StateTutorial} from "./hooks/StateTutorial.jsx";
import { ReducerTutorial } from './hooks/ReducerTutorial.jsx';
import { EffectTutorial } from './hooks/EffectTutorial.jsx';
import { RefTutorial } from "./hooks/RefTutorial.jsx";
import { LayoutEffectTutorial } from './hooks/LayoutEffectTutorial.jsx';
import { MemoTutorial } from './hooks/MemoTutorial.jsx';

function App() {

  return (
    <>
      <div className="card">
            <MemoTutorial></MemoTutorial>
      </div>
    </>
  )
}

export default App
