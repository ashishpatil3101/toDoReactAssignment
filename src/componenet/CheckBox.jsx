const Checkbox = ({ label, isChecked, onChange }) => {
    console.log(isChecked)
    return (
      <label className="flex items-center ">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          className={isChecked ? "h-5 w-5  appearance-none  border rounded-full bg-green-500" : "h-5 w-5  appearance-none  border rounded-full"}
          />
        <span className="ml-2 text-gray-700">{label}</span>
      </label>
    );
  };


  export default Checkbox;




  

