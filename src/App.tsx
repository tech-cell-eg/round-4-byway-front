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
import DashboardLayout from "./admin/components/DashboardLayout";
import DashboardHome from "./admin/pages/DashboardHome";
import NotificationAnnouncements from "./admin/pages/NotificationAnnouncements";
import NotificationSend from "./admin/pages/NotificationSend";
import CourseCustomer from "./admin/pages/CourseCustomer";
import CourseDetailsPage from "./admin/pages/CourseDetailsPage";
import CoursePage from "./pages/CoursePage";
import CoursePoromotion from "./dashboard/pages/CoursePormotion/CoursePormotion";

function App() {
  return (
    <>
      <ScrollToTop />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/courses/:id/watch" element={<CourseLearningPage />} />
          <Route path="/courses/:id" element={<CoursePage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/instructor" element={<InstructorPage />} />
          <Route path="/progress" element={<CourseProgress />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<Signup />} />
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
      {/* <ChatPage/> */}
    </>
  );
}

export default App;
