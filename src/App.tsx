import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InstructorPage from './components/InstructorPage';
import CourseProgress from './components/ui/CourseProgress';
function App() {

return (
    <Router>
      <Routes>
        <Route path="/instructor" element={<InstructorPage />} />
        <Route path="/progress" element={<CourseProgress />} />
      </Routes>
    </Router>
  );
}
export default App;
