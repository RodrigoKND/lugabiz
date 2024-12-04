
export default function SocialGroupSelect({ options, selectedGroups, onChange }) {
  return (
    <div className="row g-3">
      {options.map((option) => (
        <div className="col " key={option.id}>
          <label
          className={`d-flex flex-column align-items-center h-100 p-3 border rounded cursor-pointer ${selectedGroups.includes(option.id) && "border-3 border-primary"}`}>
            <img src={option.img} alt={option.label} className='my-3' width={70} height={70} />
            <input
              type="checkbox"
              checked={selectedGroups.includes(option.id)}
              onChange={() => onChange(option.id)}
              className="form-check-input mt-1 mb-2"
              name={option.id}
              hidden
            />
            <span className="text-center">{option.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
}