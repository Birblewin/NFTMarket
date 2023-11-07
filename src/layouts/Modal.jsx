/* eslint-disable react/prop-types */
import { useImperativeHandle, useState, forwardRef } from 'react'
import { createPortal } from 'react-dom'

const Modal = forwardRef(({ children }, ref) => {
	const [display, setDisplay] = useState(false)

	useImperativeHandle(ref, () => {
		return { openModal: () => open(), closeModal: () => close() }
	})

	const open = () => {
		setDisplay(true)
	}

	const close = () => {
		setDisplay(false)
	}

	if (display) {
		return createPortal(
			<div className='modal'>
				<div className='modal__content'>{children}</div>
			</div>,
			Element(document.getElementById('modal-root'))
		)
	}
	return null
})

Modal.displayName = "Modal"

export default Modal