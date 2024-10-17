import { Link } from "react-router-dom";
import InputSearch from "./InputSearch"
import ImageProfileUser from "./User/ImageProfileUser";

function NavbarModule() {
    const isLogging = false
    return (
        <header className="header_nav w-auto border border-bottom-3">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid p-1">
                    <Link className="text-decoration-none fs-4 ms-3 text-purple fw-bold" to="/">
                        Lugabiz
                    </Link>
                    <InputSearch />
                    <div className="d-flex justify-content-end">
                        {isLogging ? <ImageProfileUser />
                            :
                            <Link to="/login" 
                            className="nav-link text-white bg-tomato px-4 py-2 rounded-3 me-3">Iniciar sesión</Link>
                        }
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavbarModule