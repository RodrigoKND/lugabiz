function Input({styleClass='', isBarSearch = false, type, placeholder, id }) {
    return (
        <input
            className={`border rounded p-2 ${styleClass} ${isBarSearch ? "header_input" : "w-100 form-control"}`}
            type={type}
            id={id}
            placeholder={placeholder}
            maxLength={50}
        />
    );
}

export default Input