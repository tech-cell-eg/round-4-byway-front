import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import instructorImg from "./assets/instructor.avif"
// import InstructorCard from './components/InstructorCard'

import Profile from './pages/Profile'

function App() {

  return (
    <>
      {/* <InstructorCard
  name="Ronald Richards"
  role="UI/UX Designer"
  img={instructorImg} 
  rate={4.9}
  students={2400}/> */}
  <div className="container mx-auto p-4">
<Profile/>
  </div>
  
    </>
  )
}

export default App
