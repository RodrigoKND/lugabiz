function Input({styleClass='', isBarSearch = false, type, placeholder }) {
    return (
        <input
            className={`border rounded p-2 ${styleClass} ${isBarSearch ? "header_input" : "w-100"}`}
            type={type}
            placeholder={placeholder}
            maxLength={50}
        />
    );
}

export default Input