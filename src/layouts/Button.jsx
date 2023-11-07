// import React from "react"

// type ButtonType = {
// 	children?: React.ReactNode
// 	loading?: boolean
// 	onClick?(event?: React.MouseEvent): void
// 	loadingIndicator?: string | React.ReactNode
// 	variant?: string
// 	size?: string
// 	disabled?: boolean
// 	noShadow?: boolean
// }

// const Button = ({
// 	onClick,
// 	children,
// 	loading,
// 	loadingIndicator,
// 	variant,
// 	size,
// 	disabled,
// 	noShadow,
// }: ButtonType) => {
// 	return (
// 		<button
// 			onClick={onClick}
// 			className= {`btn 
// 								${loading} 
// 								${variant}
// 								${size}
// 								${disabled && 'disabled'}
// 								${noShadow && 'no-shadow'}
// 			`}
// 			disabled={disabled}
// 		>
// 			{loading ? <>{loadingIndicator}</> : <>{children}</>}
// 		</button>
// 	)
// }

// export default Button



import PropTypes from "prop-types";

const Button = ({
  onClick,
  children,
  loading,
  loadingIndicator,
  variant,
  size,
  disabled,
  noShadow,
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${
        loading ? "loading " : ""
      }${variant} ${size} ${disabled ? "disabled " : ""}${
        noShadow ? "no-shadow" : ""
      }`}
      disabled={disabled}
    >
      {loading ? <>{loadingIndicator}</> : <>{children}</>}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  loading: PropTypes.bool,
  loadingIndicator: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  variant: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool,
  noShadow: PropTypes.bool,
};

export default Button;

