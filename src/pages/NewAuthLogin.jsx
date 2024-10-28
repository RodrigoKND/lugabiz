import { Formik } from "formik"
import { object, string, date } from "yup";
import FieldsForm from "../components/FieldsForm";
import ErrorMessage from "../components/ErrorMessage";
import Button from "../components/ui/Button";

const initialValues = {
    name: "",
    lastname: "",
    borndate: "",
    email: "",
    password: ""
};
let userSchema = object().shape({
    name: string().min(2, "Complete este campo").required("*Complete este campo"),
    lastname: string().min(2, "Complete este campo").required("*Complete este campo"),
    borndate: date().required("Debe llenar su fecha de nacimiento"),
    email: string().email("Debe ingresar un correo electrónico válido").required("Complete este campo"),
    password: string().min(8, "Debe ingresar una contraseña válida no menor a 8 caracteres").required("Este campo es requerido")
});

function NewAuthLogin() {

    return (
        <section className="d-flex justify-content-center my-5 h-auto align-items-center">
            <div className="px-2 d-flex justify-content-center flex-column" style={{ width: "35%" }}>
                <h3 className="text-pretty fw-bold">Estas a pocos pasos 😊</h3>
                <Formik
                    initialValues={initialValues}
                    validationSchema={userSchema}
                    onSubmit={(values) => {
                        console.log(values)
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
                            <div className="d-flex gap-3 mt-3">
                                <div className="form-group">
                                    <FieldsForm idInput="name"
                                        onChangeInput={handleChange}
                                        valueInput={values.name}
                                        type="text"
                                        placeholder="Nombre"
                                        styleClass={touched.name && errors.name && "border border-danger"}
                                    />
                                    {touched.name && errors.name && (<ErrorMessage message={errors.name} />)}
                                </div>
                                <div className="form-group">
                                    <FieldsForm idInput="lastname"
                                        placeholder="Apellido"
                                        onChangeInput={handleChange}
                                        valueInput={values.lastname}
                                        type="text"
                                        styleClass={touched.lastname && errors.lastname && "border border-danger"}
                                    />
                                    {touched.lastname && errors.lastname && <ErrorMessage message={errors.lastname} />}
                                </div>
                            </div>
                            <div>
                                <FieldsForm idInput="borndate"
                                    textLabel="Fecha de nacimiento"
                                    onChangeInput={handleChange}
                                    valueInput={values.borndate}
                                    type="date"
                                    styleClass={touched.borndate && errors.borndate && "border border-danger"}
                                />
                                {touched.borndate && errors.borndate && <ErrorMessage message={errors.borndate} />}
                            </div>
                            <div>
                                <FieldsForm idInput="email"
                                    textLabel="Correo electrónico"
                                    onChangeInput={handleChange}
                                    valueInput={values.email}
                                    type="email"
                                    styleClass={touched.email && errors.email && "border border-danger"}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email && <ErrorMessage message={errors.email} />}
                            </div>
                            <div>
                                <FieldsForm idInput="password"
                                    textLabel="Contraseña"
                                    onChangeInput={handleChange}
                                    valueInput={values.password}
                                    type="password"
                                    styleClass={touched.password && errors.password && "border border-danger"}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password && <ErrorMessage message={errors.password} />}
                            </div>
                            <Button type="submit"
                                text="Enviar"
                                isSubmitting={isSubmitting}
                            >
                                Enviar
                            </Button>
                        </form>

                    )}
                </Formik>
            </div>
        </section>
    )
}

export default NewAuthLogin