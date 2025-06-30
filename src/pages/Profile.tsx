import ProfileContent from '@/components/ProfileContent';
import ProfileSidebar from '@/components/ProfileSidebar'
import React, { useEffect, useState } from 'react'
import TeacherContent from '@/components/TeacherContent';
import CoursesContent from '@/components/CoursesContent';
import FillterBtn from '@/components/FillterBtn';
import Messages from '@/components/Messages';

const Profile = () => {
    const [activeTab, setActiveTab] = useState("Profile");
    const [profileImage, setProfileImage] = useState<string>("");
//     useEffect(() => {
//   const saved = localStorage.getItem("profileImage");
//   if (saved) setProfileImage(saved);
// }, []);
const renderContent = () => {
    switch (activeTab) {
      case "Profile":
        return <ProfileContent onSetProfileImage={setProfileImage} />;
      case "My Courses":
        return <CoursesContent/>;
      case "Teachers":
        return <TeacherContent/>;
      case "Message":
        return <Messages/>;
      case "My Reviews":
        return <div>Reviews</div>;
      default:
        return null;
    }
  };
 
  return (
    <div className="container mx-auto  p-4 gap-8 flex flex-col lg:flex-row items-center sm:items-start w-full">

            
  <ProfileSidebar 
  profileImage={profileImage} 
  activeTab={activeTab}
      onSelect={setActiveTab}/>
      {renderContent()}
  </div>
  )
}

export default Profile