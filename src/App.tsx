import Signup from "./auth/Signup"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/theme-provider"

const App = () => {
  return (
    <ThemeProvider  storageKey="vite-ui-theme">

    <div className="">
       <Signup/>
       <Footer/>
    </div>
    </ThemeProvider>

  )
}

export default App
