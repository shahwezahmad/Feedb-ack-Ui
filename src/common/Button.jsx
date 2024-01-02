const Button = ({ children, type, version, isDisable }) => {
  return (
    <button className={`btn btn-${version}`} disabled={isDisable} type={type}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  isDisable: false,
  version: "primary",
};

export default Button;
