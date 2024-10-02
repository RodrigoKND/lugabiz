import InputSearch from "./InputSearch"
import ImageProfileUser from "./User/ImageProfileUser";

function NavbarModule() {
    return (
        <header className="header_nav">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid p-1">
                    <a className="navbar-brand fs-4 ms-3 text-purple fw-bold" href="#">
                        Lugabiz
                    </a>
                    <InputSearch />
                    <div className="d-flex justify-content-end">
                        <ImageProfileUser />
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavbarModule