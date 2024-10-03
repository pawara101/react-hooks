import React from 'react'
import Profile from '../components/Profile'
import Footer from '../components/Footer'
// to access data from any component - UseContext
export const ContextTutorial = ()=> {
return(
  <>
    <Profile></Profile>
    <Footer></Footer>
  </>
)

}