import { useState } from 'react'
import './App.css'
// import {StateTutorial} from "./hooks/StateTutorial.jsx";
// import { ReducerTutorial } from './hooks/ReducerTutorial.jsx';
// import { EffectTutorial } from './hooks/EffectTutorial.jsx';
// import { RefTutorial } from "./hooks/RefTutorial.jsx";
// import { LayoutEffectTutorial } from './hooks/LayoutEffectTutorial.jsx';
// import { MemoTutorial } from './hooks/MemoTutorial.jsx';
// import { CallbackTutorial } from './hooks/CallbackTutorial.jsx';
// import { ContextTutorial } from './hooks/ContextTutorial.jsx';
//
// import { Tile } from './components/AnimeTile.jsx';
import { SimpleComp } from './components/SimpleComp.jsx';

function App() {

  return (
    <>
      <div className="card">
            <SimpleComp/>
      </div>
    </>
  )
}

export default App
