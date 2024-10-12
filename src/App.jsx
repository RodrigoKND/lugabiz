import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, HashRouter } from "react-router-dom"

import NavbarModule from "./components/Navbar/Navbar.module"
import Home from "./pages/home"
import ProfileUser from "./pages/ProfileUser"
import Login from "./pages/Login"
import PlaceDetail from "./components/PlaceDetail"
import NewAuthLogin from "./pages/NewAuthLogin"
import "./App.css"

function App() {
  return (
    <HashRouter>
      <NavbarModule />
      <Routes>
        <Route Component={Home} path="/" exact />
        <Route Component={ProfileUser} path="/profile" exact />
        <Route Component={Login} path="/login" exact />
        <Route Component={NewAuthLogin} path="/auth" exact />
        <Route Component={PlaceDetail} path="/place/:id" exact />
      </Routes>
    </HashRouter>
  )
}

export default App
