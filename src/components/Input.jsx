const Input = ({ label, name, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label}>{name}</label>
      <input type="number" id={label} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
