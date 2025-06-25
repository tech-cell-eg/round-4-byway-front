import Signup from "./auth/Signup"
import Footer from "./components/Footer"
import Reviews from "./components/LearnerReviews"
import { ThemeProvider } from "./components/theme-provider"

const App = () => {
  return (
    <ThemeProvider  storageKey="vite-ui-theme">

    <div>
       <Signup/>
       <Reviews/>
       <Footer/>
    </div>
    </ThemeProvider>

  )
}

export default App
