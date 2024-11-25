import { useState } from "react";
import UserMenuOptions from "./UserMenuOptions";
import "../../../styles/UserStyles.css"

function ImageProfileUser() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    //TODO: interacción de perfil usuario y llamar a una api
    return (
        <div>
            <img
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&q=80&w=150&h=150"
                alt="usuario"
                width="50"
                height="50"
                className="rounded-pill object-fit-cover imageUser"
                onClick={toggleMenu}
            />
            {menuOpen && (
                <div
                    className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
                    onClick={closeMenu}
                    style={{ zIndex: 1040 }}
                ></div>
            )}
            <div
                className={`position-fixed top-0 start-0 bg-light w-25 h-100 shadow ${menuOpen ? "translate-start-0" : "translate-start-n100"
                    }`}
                style={{
                    transition: "transform 0.3s ease-in-out",
                    zIndex: 1050,
                    backdropFilter: "blur(5px)",
                }}
            >
                <div className="p-3 border-bottom d-flex justify-content-between align-items-center">
                    <h5 className="m-0">Menú</h5>
                    <button
                        className="btn btn-close"
                        onClick={closeMenu}
                        aria-label="Close"
                    ></button>
                </div>
                <UserMenuOptions />
            </div>
        </div >
    );
}



export default ImageProfileUser