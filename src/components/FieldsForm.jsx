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
                styleClass={styleClass}
                placeholder={placeholder}
                accept={type === "file" && "image/jpeg, image/png, image/jpg"}
            />
        </div>
    )
}

export default FieldsForm;