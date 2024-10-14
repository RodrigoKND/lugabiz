<<<<<<< HEAD
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
        name=''
    } = props
=======
function Input({ styleClass = '', isBarSearch = false, type, placeholder, id, onChange, onBlur, value, error }) {
>>>>>>> 2ac8f7ba5a07b61a9eacf472f9640c0c824e3dd8
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
            onChange={onChange}
            onBlur={onBlur}
            value={value}
        />
    );
}

export default Input;

