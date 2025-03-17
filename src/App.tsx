import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./pages/Home"
import AboutMe from "./pages/AboutMe"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="about-me" element={<AboutMe />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
