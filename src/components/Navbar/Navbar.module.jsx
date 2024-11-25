import { Link } from "react-router-dom";
import InputSearch from "./InputSearch"
import ImageProfileUser from "./User/ImageProfileUser";
import "./Navbar.css"

function NavbarModule() {
    const isLogged = sessionStorage.getItem("isLogged")
    const isLogging = isLogged ? true : false
    return (
        <header className="header w-auto border border-bottom-3">
            <nav className="navbar header_nav navbar-expand-lg py-3 bg-body-tertiary group-nav">
                <Link
                    className="text-decoration-none fs-2 ms-3 text-purple fw-bold title_page"
                    to="/">
                    Lugabiz
                </Link>
                <InputSearch />
                <div className="d-flex justify-content-end">
                    {isLogging ? <ImageProfileUser />
                        :
                        <Link to="/login"
                            className="nav-link border-purple bg-gray-light px-4 py-2 rounded-3 me-3">
                            Iniciar sesión
                        </Link>
                    }
                </div>
            </nav>
        </header>
    );
}

export default NavbarModule