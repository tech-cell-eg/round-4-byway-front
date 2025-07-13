
import CoursesCard from "../components/CoursesCard"
// import Navbar from "@/components/Navbar"

import Sidebar from "../components/Sidebar"

function SellerCourses() {
  return (
    <div className="w-full flex">
      <Sidebar/>
      {/* <Navbar/> */}
      <CoursesCard/> 
    </div>
  )
}

export default SellerCourses