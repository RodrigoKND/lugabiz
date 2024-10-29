import { Formik } from "formik"
import { object, string, array } from "yup"
import FieldsForm from "../components/FieldsForm"
import Button from "./ui/Button"
import Select from "./ui/Select"

const initialValues = {
    placeName: "",
    description: "",
    location: "",
    type: "",
    openingHours: "",
    closingHours: "",
    image: null,
    selectedGroups: []
};
const validationSchema = object().shape({
    placeName: string().min(2, "Complete este campo").required("*Complete este campo"),
    description: string().min(2, "Complete este campo").required("*Complete este campo"),
    location: string().min(2, "Complete este campo").required("*Complete este campo"),
    type: string().min(2, "Complete este campo").required("*Complete este campo"),
    openingHours: string().min(2, "Complete este campo").required("*Complete este campo"),
    closingHours: string().min(2, "Complete este campo").required("*Complete este campo"),
    image: string().min(2, "Complete este campo").required("*Complete este campo"),
    selectedGroups: array().min(2, "Complete este campo").required("*Complete este campo"),
})
const options = [
    { value: '1', label: 'Restaurante' },
    { value: '2', label: 'Bar' },
    { value: '3', label: 'Parque' },
    { value: '4', label: 'Cafeteria' },
    { value: '5', label: 'Balneario' },
    { value: '6', label: 'Cine' },
    { value: '7', label: 'Teatro' },
    { value: '8', label: 'Centro Comercial' },
    { value: '9', label: 'Museo' },
    { value: '10', label: 'Mirador' },
    { value: '11', label: 'Áreas Verdes' },
    { value: '12', label: 'Estudios de Arte' },
    { value: '13', label: 'Karaoke' },
    { value: '14', label: 'Centro de Videojuegos' },
]

const optionsCheckbox = [
    { value: '1', label: 'Planes en Familia' },
    { value: '2', label: 'En Pareja' },
    { value: '3', label: 'Con Amigos' },
    { value: '4', label: 'Con mi mascota' },
    { value: '5', label: 'Tiempo para mí' }
]

function FormPostPlace({ onSubmit, children }) {

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
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
                <form onSubmit={onSubmit}
                    className="form overflow-auto mt-3 p-4 z-3 bg-white rounded-3 h-100 m-auto bg-white shadow-lg h-100 position-realtive">
                    {children}
                    <div className="px-2 mb-4">
                        <FieldsForm idInput="placeName"
                            textLabel="Nombre del lugar"
                            onChangeInput={handleChange}
                            valueInput={values.placeName} />
                        <div className="my-3">
                            <label htmlFor="description">Descripción</label>
                            <textarea
                                id="description"
                                value={values.description}
                                onChange={handleChange}
                                className="form-control"
                                placeholder="Descripción del lugar"
                                rows="3"
                                style={{ resize: "none" }}
                                maxLength={120} />
                        </div>
                        <FieldsForm idInput="location"
                            textLabel="Ubicación del lugar"
                            onChangeInput={handleChange}
                            valueInput={values.location} />
                        {/* Tipo de lugar */}
                        <Select value={values.type}
                            onChange={handleChange}
                            idInput="type"
                            textLabel="Tipo de Lugar">
                            <option value="" disabled selected hidden>Selecciona el tipo del lugar</option>
                            {options.sort((a, b) => a.label.localeCompare(b.label)).map((prop) => (
                                <option key={prop.value} value={prop.value}>
                                    {prop.label}
                                </option>
                            ))}
                        </Select>
                        {/* Grupos sociales */}
                        <div className="container mt-3">
                            <label className="mb-2">Grupos sociales</label>
                            {
                                optionsCheckbox.map((prop, index) => (
                                    <div className="my-1 form-check" key={index}>
                                        <input className="form-check-input" type="checkbox" value={prop.value} id={prop.value} />
                                        <label className="form-check-label" htmlFor={prop.value}>
                                            {prop.label}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="d-flex gap-3 my-3 justify-content-evenly">
                            <FieldsForm idInput="openingHours"
                                type="time"
                                textLabel="Horario de Apertura"
                                onChangeInput={handleChange}
                                valueInput={values.openingHours} />
                            <FieldsForm idInput="closingHours"
                                type="time"
                                textLabel="Horario de Cierre"
                                onChangeInput={handleChange}
                                valueInput={values.closingHours} />
                        </div>
                        <FieldsForm idInput="image"
                            type="file"
                            textLabel="Cargar Imagen"
                            onChangeInput={handleChange}
                            valueInput={values.image} />
                    </div>

                    <Button type="submit"
                        isSubmitting={isSubmitting}
                        onClick={handleSubmit}
                        styleButton={`bg-tomato text-white`}
                    >
                    Enviar
                </Button>
                </form>
    )
}
        </Formik >
    )
}

export default FormPostPlace;