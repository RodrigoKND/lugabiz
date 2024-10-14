import { Link } from "react-router-dom"
import Input from "../components/ui/Input"
function Login() {
    return (
        <div className="container d-flex justify-content-center my-5 h-auto align-items-center">
            <div className="p-4 d-flex justify-content-center flex-column" style={{ width: "45%" }}>
                <h1 className="text-pretty fw-bold">Iniciar sesión</h1>
                <form className="d-flex flex-column gap-3 mt-3">
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
                <div className="my-4 text-center">
                    <p>¿No tienes una cuenta? <Link to="/auth" className="text-pretty">Registrate</Link></p>
                </div>
            </div>

        </div>
    )
}

export default Login