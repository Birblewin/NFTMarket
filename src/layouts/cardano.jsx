/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react'
import { useWallet, useWalletList } from '@meshsdk/react'
import Button from './Button'
import Dropdown from './Dropdown'
import Image from 'next/image'
import Modal from './Modal'

const ConnectWallet = ({ closeModal }) => {
	const { connect, disconnect, connecting } = useWallet()
	const wallets = useWalletList()

	const [selectedWallet, setSelectedWallet] = useState(null)
	const [connectionError, setConnectionError] = useState(null)

	//error ref
	const errorRef = useRef(null)


	useEffect(() => {
		const storedWallet = localStorage.getItem('selectedWallet')
		if (storedWallet) {
			setSelectedWallet(JSON.parse(storedWallet))
			connect(JSON.parse(storedWallet).name)
		}
	}, [connect])

	const handleWalletSelection = async (wallet) => {
		try {
			localStorage.setItem('selectedWallet', JSON.stringify(wallet))
			setSelectedWallet(wallet)
			await connect(wallet.name)
			setConnectionError(null)
		} catch (error) {
			setConnectionError(error.message)
			errorRef.current?.openModal()
		}
	}

	const handleDisconnect = () => {
		localStorage.removeItem('selectedWallet')
		disconnect()
		setSelectedWallet(null)
	}

	return (
    <div className="fixed right-0 -top-0 p-5 items-center  justify-center w-96 z-50  bg-black bg-opacity-100 border rounded-md animateModal1">
     <span className="close-button  text-3xl absolute top-2 right-4 cursor-pointer" onClick={closeModal}>
            &times;
         </span>

         <div>
      <img className='w-12  mt-5' src='../../public/img/cardano.png' alt='icon'/>
      </div>
             <div className='font-bold py-3  text-xl'>
       <p> Cardano wallets</p>
        </div>

      <p className=' text-sm'>By connecting your wallet, you agree to the <span className='text-[#1864F8]'>Terms & Conditions</span> and <span className='text-[#1864F8]'>Privacy Policy</span></p>


      
		<Dropdown
    
			title={
				<Button variant='accent'>
					{selectedWallet ? (
						<div className='flex text-[#9CA3AF] text-[16px] border p-3 rounded-md mb-2 '>
              <Image
								src={selectedWallet.icon}
								alt={selectedWallet.name}
								width='30'
								height='30'
							/>
							<span>{selectedWallet.name}</span>
							
						</div>
					) : connecting ? (
						'Connecting'
					) : (
						<div>
						</div>
					)}
				</Button>
			}
		>
       
			<div className='connect-wallet'>
				{!selectedWallet && !connecting && (
					<ul>
						{wallets.map((wallet) => (
							<li
              className='text-[#9CA3AF] text-[16px] border p-3 rounded-md mb-2 flex'
								key={wallet.name}
								onClick={() => handleWalletSelection(wallet)}
							>
                <Image
									src={wallet.icon}
									alt={wallet.name}
									width='30'
									height='30'
								/>
								<span className='dropdown-button__wallet-name'>
									{wallet.name}
								</span>
								
							</li>
						))}
					</ul>
				)}
				{selectedWallet && (
					<div className='connect-wallet__disconnect '>
						<Button 
            variant='outline' onClick={handleDisconnect} noShadow>
							Disconnect
						</Button>
					</div>
				)}
			</div>
			<Modal
						ref={errorRef}
						>
							<div className="error__modal-content">

						
							<div className='modal__title'>
								<h4>Wallet connection error</h4>
							</div>
							<div className='modal__content'>
								<p>{connectionError}</p>
							</div>

							<div className='modal__button'>
								<Button variant='primary' onClick={() => errorRef.current?.closeModal()}>
									Okay
								</Button>
							</div>
							</div>


						</Modal>
		</Dropdown>
    </div>
	)
}

export default ConnectWallet