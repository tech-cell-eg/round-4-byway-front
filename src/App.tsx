
import { useEffect, useState } from 'react';
import './App.css';
import FullPageLoader from './components/ui/FullPageLoader';
import InstructorPage from './components/InstructorPage';
import CourseProgress from './components/ui/CourseProgress';
function App() {
  const [allData , setAllData] = useState([]);
  const [IsLoading , setIsLoading] = useState(true);
  useEffect(()=>{
    fetch("https://fakestoreapi.com/products")
    .then((data)=>data.json())
    .then((data)=>{
    setAllData(data);
    setIsLoading(false);
  }).catch((error)=>
    <p>{error}</p>
  )
  }, [])
  if (IsLoading) {
    return <FullPageLoader/>
  }
  return (
    <>
    
    
    <InstructorPage apiData ={allData}/>

    <CourseProgress/>

    </>
  );
}

export default App;
