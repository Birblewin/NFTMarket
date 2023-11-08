/* eslint-disable react/prop-types */
const Dropdown = ({ title, children }) => {
	return (
		<div className='dropdown'>
			<div className='dropdown__button'>{title}</div>
			<div className='dropdown__content'>{children}</div>
		</div>
	)
}

export default Dropdown