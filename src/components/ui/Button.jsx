function Button({ type, text, onClick, isSubmitting }) {
    return (
        <button type={type}
            disabled={isSubmitting}
            onClick={onClick}
            className="p-2 w-100 rounded-2 bg-tomato text-white border border-0 mb-5">
            {text}
        </button>
    );
}

export default Button;