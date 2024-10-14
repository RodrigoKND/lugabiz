function Input({ styleClass = '', isBarSearch = false, type, placeholder, id, onChange, onBlur, value, error }) {
    return (
        <input
            className={`border rounded p-2 ${styleClass} ${isBarSearch ? "header_input" : "w-100 form-control"} ${error ? "border-danger" : ""}`}
            type={type}
            id={id}
            placeholder={placeholder}
            maxLength={50}
            onChange={onChange}
            onBlur={onBlur}
            value={value}
        />
    );
}

export default Input;

