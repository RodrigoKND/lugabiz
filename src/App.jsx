import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, HashRouter } from "react-router-dom"

import NavbarModule from "./components/Navbar/Navbar.module"
import Home from "./pages/home"
import ProfileUser from "./pages/ProfileUser"

import "./App.css"

function App() {
  return (
    <HashRouter>
      <NavbarModule />
      <Routes>
        <Route Component={Home} path="/" exact />
        <Route Component={ProfileUser} path="/profile" exact />
      </Routes>
    </HashRouter>
  )
}

export default App
