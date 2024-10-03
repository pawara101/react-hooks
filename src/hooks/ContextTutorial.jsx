import React from 'react'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
// to access data from any component - UseContext
function ContextTutorial() {
    
  return (
    <div>
      <Profile></Profile>
      <Footer></Footer>
    </div>
  )
}

export default ContextTutorial
