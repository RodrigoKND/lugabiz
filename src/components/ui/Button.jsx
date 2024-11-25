function Button({ type, onClick, isSubmitting, styleButton, children }) {
    return (
        <button type={type}
            disabled={isSubmitting}
            onClick={onClick}
            className={`p-2 rounded-2 ${styleButton} border border-0 mb-5 cursor-pointer`}>
            {children}
        </button>
    );
}

export default Button;