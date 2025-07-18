import ProfileContent from '@/components/ProfileContent';
import ProfileSidebar from '@/components/ProfileSidebar'
import React, { useEffect, useState } from 'react'
import TeacherContent from '@/components/TeacherContent';
import CoursesContent from '@/components/CoursesContent';
import Messages from '@/components/Messages';
import ProfileReviews from '@/components/ProfileReviews';

const Profile = () => {
    const [activeTab, setActiveTab] = useState("Profile");
    const [profileImage, setProfileImage] = useState<string>("");
    useEffect(() => {
  const saved = localStorage.getItem("profileImage");
  if (saved) setProfileImage(saved);
}, []);
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
        return <ProfileReviews/>;
      default:
        return null;
    }
  };
 
  return (
    <div className="container mx-auto p-4 gap-8 flex flex-col lg:flex-row items-center sm:items-start ">

            
  <ProfileSidebar 
  profileImage={profileImage} 
  activeTab={activeTab}
      onSelect={setActiveTab}/>
      {renderContent()}
  </div>
  )
}

export default Profile