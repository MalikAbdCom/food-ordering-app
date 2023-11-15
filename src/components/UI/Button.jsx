const Button = ({ children, className, textOnly, ...props }) => {
  let styleForButton = textOnly ? `font-semibold hover:text-blue-200` : ``;

  return (
    <button className={`px-4 py-2 ${className} ${styleForButton}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
