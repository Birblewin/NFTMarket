/* eslint-disable react/prop-types */
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
			className= {`btn 
								${loading} 
								${variant}
								${size}
								${disabled && 'disabled'}
								${noShadow && 'no-shadow'}
			`}
			disabled={disabled}
		>
			{loading ? <>{loadingIndicator}</> : <>{children}</>}
		</button>
	)
}

export default Button