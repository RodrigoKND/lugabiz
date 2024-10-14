import Input from "../components/ui/Input"

function NewAuthLogin(params) {
    return (
        <div className=" container d-flex justify-content-center align-items-center h-auto">
            <div className="p-4 d-flex justify-content-center flex-column" style={{ width: "45%" }}>
                <h3 className="text-pretty fw-bold">Estas a pocos pasos 😊</h3>
                <form className="d-flex flex-column gap-3 mt-3">
                    <div className="d-flex gap-3">
                        <Input type="text" placeholder={"Nombre"} />
                        <Input type="text" placeholder={"Apellido"} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label text-muted">Correo electrónico</label>
                        <Input type="email" id="email" placeholder="example@gmail.com" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password text-muted" className="form-label">Contraseña</label>
                        <Input type="password" id="password" />
                    </div>
                    <button type="button"
                        className="p-2 rounded-2 bg-tomato text-white border border-0">
                        Enviar
                    </button>
                </form>
            </div>

        </div>
    )
}

export default NewAuthLogin