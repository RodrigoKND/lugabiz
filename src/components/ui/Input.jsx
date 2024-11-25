function Input({styleClass = '', isBarSearch = false, error = false, ...props}) {

    return (
        <input
            className={`border rounded p-2 ${styleClass} ${isBarSearch ? "header_input" : "w-100"} ${error ? "border-danger" : ""}`}
            {...props}
        />
    );
}

export default Input;

