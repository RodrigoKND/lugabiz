import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import { Formik } from "formik"
import { object, string } from "yup"

import ErrorMessage from "../components/ErrorMessage"

import IarrowBack from "../Icons/IarrowBack"
import FieldsForm from "../components/FieldsForm"
import Button from "../components/ui/Button"

import "../styles/FormsStyles.css"
export function MessageAlertError({ message, classNameContainer }) {
    return (
        <div className={`rounded-1 text-center ${classNameContainer}`} style={{ backgroundColor: "#FFE3E1" }}>
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
        fetch("http://localhost:3000/api/v1/auth/user_register", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(values),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    sessionStorage.setItem("isLogged", true);
                    navigate("/");
                    setIsErrorLogin(false);
                }
            })
            .catch((err) => {
                console.log(err)
                setIsErrorLogin(true)

            });
        // Existe un error al registrar
    };

    return (
        <section className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="p-4 d-flex justify-content-center flex-column" style={{ width: "45%" }}>
                <header className="mb-4">
                    <Link to="/">
                        <IarrowBack />
                    </Link>
                </header>
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
                                <div>
                                    <FieldsForm
                                        type="email"
                                        idInput="email" textLabel="Correo Electrónico"
                                        onChangeInput={handleChange}
                                        valueInput={values.email}
                                        onBlur={handleBlur}
                                        styleClass={`${touched.email && errors.email && "border border-danger"} form-control`}
                                    />
                                    {touched.email && errors.email && <ErrorMessage message={errors.email} />}
                                </div>

                                <div className="mb-3">
                                    <FieldsForm
                                        type="password"
                                        idInput="password"
                                        textLabel="Contraseña"
                                        onChangeInput={handleChange}
                                        onBlur={handleBlur}
                                        styleClass={`${errors.password && touched.password && "border border-danger"} form-control`}
                                        valueInput={values.password}
                                    />
                                    {touched.password && errors.password && <ErrorMessage message={errors.password} />}
                                </div>
                                <Button type="submit"
                                    isSubmitting={isSubmitting}
                                    onClick={handleSubmit}
                                    styleButton={`bg-tomato text-white`}
                                >
                                    Enviar
                                </Button>

                            </div>
                        </form>
                    )}
                </Formik>
                <div className="my-4 text-center">
                    <p>¿No tienes una cuenta? <Link to="/auth" className="text-pretty">Regístrarse</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Login;
