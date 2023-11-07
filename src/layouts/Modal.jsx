/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { useImperativeHandle, useState, forwardRef } from 'react'
import { createPortal } from 'react-dom'

export default function Modal(){
	forwardRef(({ children }, ref) => {
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
				document.getElementById('modal-root')
			)
		}

		return null
})}