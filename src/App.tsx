import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import instructorImg from "./assets/instructor.avif"
import InstructorCard from './components/InstructorCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <InstructorCard
  name="Ronald Richards"
  role="UI/UX Designer"
  img={instructorImg} // صورة فاشلة = يظهر RR
  rate={4.9}
  students={2400}
/>
    </>
  )
}

export default App
