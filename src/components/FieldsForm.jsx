import Input from "./ui/Input"

function FieldsForm(props) {
    const { type = "text",
        idInput = '',
        textLabel = "",
        onChangeInput,
        valueInput = '',
        styleClass = '',
        placeholder = ''
    } = props
    return (
        <div>
            <label className="mt-2" htmlFor={idInput}>{textLabel}</label>
            <Input
                type={type}
                id={idInput}
                value={valueInput}
                onChange={onChangeInput}
                styleClass={type !== "email" && type !== "password" ? "text-capitalize" : styleClass}
                placeholder={placeholder}
                autoComplete="off"
                accept={type === "file" ? "image/jpeg, image/png, image/jpg" : "text/plain"}
            />
        </div>
    )
}

export default FieldsForm;