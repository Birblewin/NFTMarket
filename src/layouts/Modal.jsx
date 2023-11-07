// import { useImperativeHandle, useState, ReactNode, forwardRef } from 'react'
// import { createPortal } from 'react-dom'
// import React from 'react'

// export type ModalHandler = {
// 	openModal: () => void
// 	closeModal: () => void
// }

// type ModalProps = {
// 	children: ReactNode
// }

// const Modal = forwardRef<ModalHandler, ModalProps>(({ children }, ref) => {
// 	const [display, setDisplay] = useState<boolean>(false)

// 	useImperativeHandle(ref, () => {
// 		return { openModal: () => open(), closeModal: () => close() }
// 	})

// 	const open = (): void => {
// 		setDisplay(true)
// 	}

// 	const close = (): void => {
// 		setDisplay(false)
// 	}

// 	if (display) {
// 		return createPortal(
// 			<div className='modal'>
// 				<div className='modal__content'>{children}</div>
// 			</div>,
// 			document.getElementById('modal-root') as Element
// 		)
// 	}
// 	return null
// })

// export default Modal

import { useImperativeHandle, useState, forwardRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const Modal = forwardRef(({ children }, ref) => {
  const [display, setDisplay] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => open(),
    closeModal: () => close(),
  }));

  const open = () => {
    setDisplay(true);
  };

  const close = () => {
    setDisplay(false);
  };

  const modalRoot = document.getElementById('modal-root');

  if (display && modalRoot) {
    return createPortal(
      <div className='modal'>
        <div className='modal__content'>{children}</div>
      </div>,
      modalRoot
    );
  }

  return null;
});

Modal.displayName = 'Modal'; // Add a display name

Modal.propTypes = {
  children: PropTypes.node, // Prop type for 'children'
};


export default Modal;
