
import { useEffect, useState } from 'react';
import './App.css';
import FullPageLoader from './components/ui/FullPageLoader';
import InstructorPage from './components/InstructorPage';
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
    </>
  );
}

export default App;
