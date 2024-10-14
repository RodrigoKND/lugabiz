import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Input from "../components/ui/Input"; 
import "../styles/FormsStyles.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const  navigate = useNavigate();
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("El correo electrónico es inválido")
            .required("Se requiere el correo electrónico"),
        password: Yup.string()
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
                    {({ isSubmitting }) => (
                        <Form className="d-flex flex-column gap-3 mt-3">
                            <div className="mb-2">
                                <label htmlFor="email" className="form-label text-muted">Correo electrónico</label>
                                <Field
                                    as={Input}
                                    styleClass={({ errors, touched }) => (errors.email && touched.email ? "border border-danger" : "")}
                                    type="email"
                                    id="email"
                                    placeholder="example@gmail.com"
                                    name="email"
                                />
                                <ErrorMessage name="email" component="p" className="text-danger" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label text-muted">Contraseña</label>
                                <Field
                                    as={Input}
                                    styleClass={({ errors, touched }) => (errors.password && touched.password ? "border border-danger" : "")}
                                    type="password"
                                    id="password"
                                    name="password"
                                />
                                <ErrorMessage name="password" component="p" className="text-danger" />
                            </div>
                            <button
                                type="submit"
                                className="p-2 rounded-2 bg-tomato text-white border border-0"
                                disabled={isSubmitting}
                            >
                                Enviar
                            </button>
                        </Form>
                    )}
                </Formik>
                <div className="my-4 text-center">
                    <p>¿No tienes una cuenta? <Link to="/auth" className="text-pretty">Regístrate</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;