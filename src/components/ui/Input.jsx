function Input(props) {
    const {
        styleClass = '', 
        isBarSearch = false, 
        type = "text", 
        placeholder = '', 
        id, 
        onChange, 
        onBlur, 
        value,
        name='',
        error
    } = props

    return (
        <input
            className={`border rounded p-2 ${styleClass} ${isBarSearch ? "header_input" : "w-100 form-control"} ${error ? "border-danger" : ""}`}
            type={type}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            name={name}
            maxLength={50}
            onChange = {onChange}
            autoComplete="off"
            onBlur={onBlur}
            value={value}
        />
    );
}

export default Input;

