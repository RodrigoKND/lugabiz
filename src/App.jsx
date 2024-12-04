import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { Routes, Route, HashRouter, Link } from "react-router-dom";

import NavbarModule from "./components/Navbar/Navbar.module";
import Home from "./pages/Home";
import ProfileUser from "./pages/ProfileUser";
import Login from "./pages/Login";
import FormPostPlace from "./pages/FormPostPlace";
import PlaceDetail from "./components/PlaceDetail";
import NewAuthLogin from "./pages/NewAuthLogin";
import AdminPage from "./pages/AdminPage";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <NavbarModule />
      <Routes>
        <Route Component={Home} path="/" exact />
        <Route Component={ProfileUser} path="/profile" exact />
        <Route Component={Login} path="/login" exact />
        <Route Component={FormPostPlace} path="/FormPostPlace" exact />
        <Route Component={NewAuthLogin} path="/auth" exact />
        <Route Component={PlaceDetail} path="/place/:id" exact />
        <Route Component={AdminPage} path="/AdminPage" exact />
        <Route
          element={
            <section
              style={{ height: "100dvh", backgroundColor: "#F9F9F9", overflow:'hidden' }}
            >
              <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="text-primary" style={{ fontSize: "5rem" }}>
                  Ups!
                </h1>
                <p className="text-muted fs-2">
                  La página que buscas no existe
                </p>
                <span>
                  <Link to="/" className="text-primary">
                    Volver a la página de inicio
                  </Link>
                </span>
              </div>
              <div className="d-flex justify-content-center my-5 align-items-center
               ">
                <img
                  src="/public/404.webp"
                  alt="no post yet"
                  className="h-100 opacity-1 object-fit-cover"
                  style={{ objectFit: "contain", width: "80%" }}
                />
              </div>
            </section>
          }
          path="*"
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
