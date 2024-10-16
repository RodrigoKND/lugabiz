import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { Formik } from "formik"
import { object, string } from "yup"

import Input from "../components/ui/Input"
import { ErrorMessage } from "./NewAuthLogin"

import "../styles/FormsStyles.css"

function MessageAlertError({ message }) {
    return (
        <div className="rounded-1 text-center" style={{ backgroundColor: "#FFE3E1" }}>
            <p className="text-danger py-3">{message}</p>
        </div>
    );
}

function Login() {
    const [isErrorLogin, setIsErrorLogin] = useState(false);
    const navigate = useNavigate();
    const validationSchema = object({
        email: string()
            .email("El correo electrónico es inválido")
            .required("Se requiere el correo electrónico"),
        password: string()
            .required("Se requiere la contraseña")
            .min(8, "La contraseña debe tener al menos 8 caracteres"),
    });

    const handleSubmit = (values) => {
        if (values.email === "correo@gmail.com" && values.password === "password123") {
            // Redirigir al usuario a AdminPage o a ProfileUser, dependiendo de si el usuario es administrador o no
            setIsErrorLogin(false)
            navigate("/AdminPage")
            return
        }
        // Existe un error al registrar
        setIsErrorLogin(true)
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="p-4 d-flex justify-content-center flex-column" style={{ width: "45%" }}>
                <h1 className="text-pretty fw-bold">Iniciar sesión</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    {({ values, errors, isSubmitting, touched, handleChange, handleBlur, handleSubmit }) => (
                        <form onSubmit={handleSubmit}>
                            {isErrorLogin && (<MessageAlertError message="El correo electrónico o la contraseña no son correctos" />)}
                            <div className="d-flex flex-column gap-3 mt-3">
                                <div className="mb-2">
                                    <label htmlFor="email" className="form-label text-muted">Correo electrónico</label>
                                    <Input
                                        type="email"
                                        id="email"
                                        placeholder="example@gmail.com"
                                        name="email"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        styleClass={touched.email && errors.email && "border border-danger"}
                                        value={values.email}
                                    />
                                    {touched.email && errors.email && <ErrorMessage message={errors.email} />}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label text-muted">Contraseña</label>
                                    <Input
                                        type="password"
                                        id="password"
                                        name="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        styleClass={errors.password && touched.password && "border border-danger"}
                                        value={values.password}
                                    />
                                    {touched.password && errors.password && <ErrorMessage message={errors.password} />}

                                </div>
                                <button
                                    type="submit"
                                    className="p-2 rounded-2 bg-tomato text-white border border-0 cursor-pointer"
                                    disabled={isSubmitting}
                                >
                                    Enviar
                                </button>

                            </div>
                        </form>
                    )}
                </Formik>
                <div className="my-4 text-center">
                    <p>¿No tienes una cuenta? <Link to="/auth" className="text-pretty">Regístrarse</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;