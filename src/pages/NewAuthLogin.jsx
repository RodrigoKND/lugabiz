import Input from "../components/ui/Input"
import { Formik } from "formik"
import { object, string, date } from "yup";

export function ErrorMessage({ message }) {
    return (
        <div className="text-danger mt-2">
            {message}
        </div>
    );
}

function NewAuthLogin() {
    const initialValues = {
        name: "",
        lastname: "",
        borndate: "",
        email: "",
        password: "",
        country: "",
        city: "",
    };
    let userSchema = object().shape({
        name: string().min(2, "Complete este campo").required("*Complete este campo"),
        lastname: string().min(2, "Complete este campo").required("*Complete este campo"),
        borndate: date().required("Debe llenar su fecha de nacimiento"),
        country: string().required("Debe seleccionar su pais"),
        city: string().required("Debe seleccionar su ciudad"),
        email: string().email("Debe ingresar un correo electrónico válido").required("Complete este campo"),
        password: string().min(8, "Debe ingresar una contraseña válida no menor a 8 caracteres").required("Este campo es requerido")
    });

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
                        <form className="d-flex flex-column gap-3 mt-3" onSubmit={handleSubmit}>
                            <div className="d-flex gap-3">
                                <div className="form-group">
                                    <Input placeholder={"Nombre"}
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="name"
                                        styleClass={touched.name && errors.name && "border border-danger"}
                                        handleSubmit={() => handleSubmit(values)}
                                    />
                                    {touched.name && errors.name && (<ErrorMessage message={errors.name} />)}
                                </div>
                                <div className="form-group">
                                    <Input placeholder={"Apellido"}
                                        value={values.lastname}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="lastname"
                                        styleClass={touched.lastname && errors.lastname && "border border-danger"}
                                        handleSubmit={() => handleSubmit(values)}
                                    />
                                    {touched.lastname && errors.lastname && <ErrorMessage message={errors.lastname} />}
                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="borndate" className="form-label text-muted">
                                    Fecha de nacimiento
                                </label>
                                <Input type="date" id="borndate"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="borndate"
                                    styleClass={touched.borndate && errors.borndate && "border border-danger"}
                                    value={values.borndate}
                                />
                                {touched.borndate && errors.borndate && <ErrorMessage message={errors.borndate} />}
                            </div>
                            <div className="d-flex gap-3">
                                <div className="form-group">
                                    <select className={`form-select ${touched.country && errors.country && "border border-danger"}`}
                                        aria-label="Default select country"
                                        value={values.country}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="country"
                                    >

                                        <option selected>Pais</option>
                                        <option value="Bolivia">Bolivia</option>
                                        <option value="Argentina">Argentina</option>
                                        <option value="Colombia">Colombia</option>
                                    </select>
                                    {touched.country && errors.country && <ErrorMessage message={errors.country} />}
                                </div>
                                <div className="form-group">
                                    <select className={`form-select ${touched.country && errors.country && "border border-danger"}`}
                                        aria-label="Default select city"
                                        value={values.city}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        name="city"
                                    >
                                        <option selected>Ciudad</option>
                                        <option value="Cochabamba">Cochabamba</option>
                                        <option value="Santa Cruz">Santa Cruz</option>
                                        <option value="Tarija">Tarija</option>
                                    </select>
                                    {touched.city && errors.city && <ErrorMessage message={errors.city} />}

                                </div>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="email" className="form-label text-muted">
                                    Correo electrónico
                                </label>
                                <Input type="email" id="email"
                                    placeholder="example@gmail.com"
                                    value={values.email}
                                    onChange={handleChange}
                                    name="email"
                                    styleClass={touched.email && errors.email && "border border-danger"}
                                    onBlur={handleBlur}
                                />
                                {touched.email && errors.email && <ErrorMessage message={errors.email} />}
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password text-muted" className="form-label">Contraseña</label>
                                <Input type="password"
                                    id="password"
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    styleClass={touched.password && errors.password && "border border-danger"}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password && <ErrorMessage message={errors.password} />}
                            </div>
                            <button type="submit"
                                disabled={isSubmitting}
                                className="p-2 rounded-2 bg-tomato text-white border border-0 mb-5">
                                Enviar
                            </button>
                        </form>

                    )}
                </Formik>
            </div>
        </section>
    )
}

export default NewAuthLogin