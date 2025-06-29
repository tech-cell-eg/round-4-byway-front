
import { Route, Routes } from "react-router-dom";
import InstructorPage from './components/InstructorPage';
import CourseProgress from './components/ui/CourseProgress';
import "./App.css";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import HomeScreen from "./pages/HomeScreen";
import CourseLearningPage from "./pages/CourseLearningPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />} />
          <Route path="/courses/:id" element={<CourseLearningPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/instructor" element={<InstructorPage />} />
          <Route path="/progress" element={<CourseProgress />} />
        </Route>
      </Routes>
    </>
  )
}
export default App;
