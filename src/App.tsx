import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import HomeScreen from "./pages/HomeScreen";
import CourseLearningPage from "./pages/CourseLearningPage";
import ScrollToTop from "./components/ScrollToTop";
import ShoppingCart from "./pages/ShoppingCart";
import Profile from "./pages/Profile";
import LoginForm from "./components/ui/LoginForm";
import Signup from "./auth/Signup";
import Checkout from "./pages/Checkout";
import InstructorPage from "./pages/InstructorPage";
import CourseProgress from "./components/ui/CourseProgress";
import ReviewsBadge from "./Admin/components/ReviewsBadge";
import DashboardLayout from "./Admin/components/DashboardLayout";
import DashboardHome from "./Admin/pages/DashboardHome";
import NotificationAnnouncements from "./Admin/pages/NotificationAnnouncements";
import NotificationSend from "./Admin/pages/NotificationSend";
import CourseCustomer from "./Admin/pages/CourseCustomer";
import CourseDetailsPage from "./Admin/pages/CourseDetailsPage";
import CoursePage from "./pages/CoursePage";
import CoursePoromotion from "./dashboard/pages/CoursePormotion/CoursePormotion";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/courses/:id" element={<CourseLearningPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/instructor" element={<InstructorPage />} />
          <Route path="/progress" element={<CourseProgress />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/review" element={<ReviewsBadge />} />
        </Route>
        <Route path="/seller" element={<DashboardLayout />}>
          <Route index path="/seller/dashboard" element={<DashboardHome />} />
          <Route
            path="communication-announcements"
            element={<NotificationAnnouncements />}
          />
          <Route path="notification-send" element={<NotificationSend />} />
          <Route path="course-customer" element={<CourseCustomer />} />
          <Route path="course-details" element={<CourseDetailsPage />} />
          <Route path="courses" element={<CoursePoromotion />} />
          {/* All Dashboard Routes Go Here*/}
        </Route>
      </Routes>
      {/* <CourseChapters/> */}
      {/* <ChatPage/> */}
    </>
  );
}

export default App;
