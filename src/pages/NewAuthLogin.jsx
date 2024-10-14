import Input from "../components/ui/Input"
import { Formik } from "formik"
import { object, string, date } from "yup";

function ErrorMessage({ message }) {
    return (
<<<<<<< HEAD
        <p className="text-danger">
            {message}
        </p>
    );
}
=======
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
>>>>>>> 2ac8f7ba5a07b61a9eacf472f9640c0c824e3dd8

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
        name: string().required("Por favor completa este campo"),
        lastname: string().required("Por favor completa este campo"),
        borndate: date().required("Debe llenar su fecha de nacimiento"),
        country: string().required("Debe seleccionar su pais"),
        city: string().required("Debe seleccionar su ciudad"),
        email: string().email("Debe ingresar un correo electrónico válido").required(),
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
                                <Input placeholder={"Nombre"}
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="name"
                                    handleSubmit={() => handleSubmit(values)}
                                />
                                {touched.name && errors.name && <ErrorMessage message={errors.name} />}
                                <Input placeholder={"Apellido"}
                                    value={values.lastname}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="lastname"
                                    handleSubmit={() => handleSubmit(values)}
                                />
                                {touched.lastname && errors.lastname && <ErrorMessage message={errors.lastname} />}
                            </div>
                            <div className="mb-2">
                                <label htmlFor="borndate" className="form-label text-muted">
                                    Fecha de nacimiento
                                </label>
                                <Input type="date" id="borndate"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    name="borndate"
                                    value={values.borndate}
                                />
                                {touched.borndate && errors.borndate && <ErrorMessage message={errors.borndate} />}
                            </div>
                            <div className="d-flex gap-3">
                                <select className="form-select"
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
                                <select className="form-select"
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
                            <div className="mb-2">
                                <label htmlFor="email" className="form-label text-muted">
                                    Correo electrónico
                                </label>
                                <Input type="email" id="email"
                                    placeholder="example@gmail.com"
                                    value={values.email}
                                    onChange={handleChange}
                                    name="email"
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