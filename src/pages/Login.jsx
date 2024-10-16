import { Link } from "react-router-dom";
import { Formik } from "formik";
import { object, string } from "yup";
import Input from "../components/ui/Input";
import { useNavigate } from "react-router-dom";
import { ErrorMessage } from "./NewAuthLogin";
import "../styles/FormsStyles.css";

const Login = () => {
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
            alert("Inicio de sesión exitoso");
            // Redirigir al usuario a Profile
            navigate("/AdminPage")
        } else {
            alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
            <div className="p-4 d-flex justify-content-center flex-column" style={{ width: "45%" }}>
                <h1 className="text-pretty fw-bold">Iniciar sesión</h1>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ values, errors, isSubmitting, touched, handleChange, handleBlur, handleSubmit }) => (
                        <form className="d-flex flex-column gap-3 mt-3" onSubmit={handleSubmit}>
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
                                className="p-2 rounded-2 bg-tomato text-white border border-0"
                                disabled={isSubmitting}
                            >
                                Enviar
                            </button>
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