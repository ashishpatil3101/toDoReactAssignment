const Checkbox = ({ label, isChecked, onChange }) => {
    return (
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className="form-checkbox h-5 w-5 text-blue-500"
        />
        <span className="ml-2 text-gray-700">{label}</span>
      </label>
    );
  };


  export default Checkbox;