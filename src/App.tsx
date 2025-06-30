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
import CoursePage from "./pages/CoursePage";
import Checkout from "./pages/Checkout";
import InstructorPage from "./pages/InstructorPage";
import CourseProgress from "./components/ui/CourseProgress";

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
          <Route path="/signup" element={<Signup />} />{" "}
        </Route>
      </Routes>
    </>
  );
}

export default App;
