function Select({ value, onChange, idInput, textLabel, children }) {
    return (
        <div className="my-1">
            <label className="my-1" htmlFor={idInput}>{textLabel}</label>
            <select class="form-select"
                id={idInput}
                value={value}
                onChange={onChange}
                required
                aria-label="Default select type of the place">
                {children}
            </select>
        </div>
    )
}

export default Select;