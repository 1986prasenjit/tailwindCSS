const Input = ({
    id,
    label,
    type,
    placeHolder,
    icon,
    extraClasses = "",
    ...rest
  }) => {
    return (
      <div className="mb-2 sm:mb-4">
        {label && (
          <label htmlFor={id} className="block text-lg sm:text-lg  font-normal mb-0.5 sm:mb-1">
            {label}
          </label>
        )}
        <div
          className={`flex items-center border-2 border-gray-300 rounded-md p-0.5 sm:p-1 h-8 sm:h-12 shadow-sm focus-within:border-[#e47369f1]`}
        >
          {icon && <i className={`${icon} mx-2 text-lg`}></i>}
          <input
            type={type}
            placeholder={placeHolder}
            id={id}
            autoComplete="current-password"
            className=" flex sm:flex-1 border-none outline-none text-sm sm:text-xl font-light bg-transparent p-1 placeholder-gray-500"
          />
        </div>
      </div>
    );
  };
  
  export default Input;
  