function ErrorMessage({ message }) {
    return (
        <div className="text-danger mt-2">
            {message}
        </div>
    );
}

export default ErrorMessage;