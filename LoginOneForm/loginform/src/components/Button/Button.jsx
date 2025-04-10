const Button = ({ name, icon, extraClasses = "", ...rest }) => {
    return (
      <button className={extraClasses} {...rest}>
        {icon && <i className={`${icon} mr-4 text-2xl`}></i>}
        {name}
      </button>
    );
  };
  
  export default Button;
  