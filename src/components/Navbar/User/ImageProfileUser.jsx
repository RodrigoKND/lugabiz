import { useRef } from "react";
import UserMenuOptions from "./UserMenuOptions";

function ImageProfileUser() {
    const menu = useRef();
    const handleImageProfile = () => {
        menu.current?.classList.toggle("showMenu")
    }

    //TODO: interacción de perfil usuario y llamar a una api
    return (
        <>
            <img
                src="https://avatars.githubusercontent.com/u/1561955?v=4"
                alt="usuario"
                width="50"
                height="50"
                role="button"
                className="rounded-pill object-fit-cover imageUser z-2"
                onClick={handleImageProfile}
            />
            <div className={`position-absolute end-0 z-1 m-5 menu`} ref={menu}>
                <UserMenuOptions/>
            </div>
        </>
    );
}

export default ImageProfileUser