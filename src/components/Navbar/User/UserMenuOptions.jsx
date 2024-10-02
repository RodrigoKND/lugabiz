//Solo se aceptan cuatro valores para role
// user, admin, singin y logout
const optionsMenu = [
    {
        role: "user",
        content: "perfil",
        path: "/#/profile"
    },
    {
        role: "user",
        content: "mis publicaciones",
        path: "#"
    },
    {
        role: "logout",
        content: "cerrar sesión",
        path: "#"
    }
]

function UserMenuOptions() {
    return (
        <ul className="list-group">
            {
                optionsMenu.map((item, index) => (
                    <li key={index} 
                    className={`p-2 text-capitalize 
                    ${item.role !== "logout" ? "list-item" : "list-item-logout text-white"}`}>
                        <a className="nav-link" href={item.path}>
                            {item.content}
                        </a>
                    </li>
                ))
            }
        </ul>
    );
}

export default UserMenuOptions