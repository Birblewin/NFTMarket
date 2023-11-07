// import React from 'react'

// type DropdownProps = {
// 	title: string | React.ReactNode
// 	children: React.ReactNode
// }

// const Dropdown = ({ title, children }: DropdownProps) => {
// 	return (
// 		<div className='dropdown'>
// 			<div className='dropdown__button'>{title}</div>
// 			<div className='dropdown__content'>{children}</div>
// 		</div>
// 	)
// }

// export default Dropdown


import PropTypes from 'prop-types';

const Dropdown = ({ title, children }) => {
  return (
    <div className='dropdown'>
      <div className='dropdown__button'>{title}</div>
      <div className='dropdown__content'>{children}</div>
    </div>
  );
};

Dropdown.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]), // Prop type for 'title'
  children: PropTypes.node, // Prop type for 'children'
};

export default Dropdown;

