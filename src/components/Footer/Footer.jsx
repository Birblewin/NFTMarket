// IMPORTING NECESSARY MODULES
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';



export default function Footer(){
    return(
        <footer className='footer w-full h-72 flex justify-between items-center p-10  border-t-2 border-b-2 border-white  '>
            <div className='footer__description text-left flex flex-col justify-between items-start gap-["20px"]  '>
                <figure className="footer__description--title flex items-center justify-center gap-2.5">
                    <img 
                        className='w-7 h-auto'
                        src="/img/birble.png" 
                        alt="birble-logo"
                        title='birble-logo'
                        loading='lazy'
                        width={100}
                        height={100}
                    />

                    <figcaption className='text-white font-inter text-2xl font-semibold'>Birble.store</figcaption>
                </figure>

                <p className="footer__description--description text-gray-400 font-inter text-base font-normal leading-normal whitespace-normal max-w-prose">Birble is the largest Cardano NFT marketplace. We believe in people, planet, & purpose before profit. We believe in endlessly supporting creators. We believe in YOU. Join us in our mission to create a brighter future for all.</p>
                
                <div className="footer__description--social_links flex justify-between items-center mt-5">
                    <NavLink to="https://www.birble.store" className="footer__description--social_links--link mr-1 cursor-pointer  border-white px-3 py-0.5 w-full h-full bg-transparent transition-transform hover:scale-125 transform scale-125 " target='_blank'>
                    <Icon icon="skill-icons:instagram" width="26" height="26" />
                    </NavLink>
                    <NavLink to="https://www.facebook.com" className="footer__description--social_links--link mr-1 cursor-pointer  border-white px-3 py-0.5 w-full h-full bg-transparent transition-transform hover:scale-125 transform scale-125 " target='_blank'>
                    <Icon icon="logos:discord-icon" width="26" height="26" /> 
                    </NavLink>
                    <NavLink to="https://www.telegram.com" className="footer__description--social_links--link mr-1 cursor-pointer  border-white px-3 py-0.5 w-full h-full bg-transparent transition-transform hover:scale-125 transform scale-125 " target='_blank'>
                    <Icon icon="logos:telegram" width="26" height="26" />
                    </NavLink>
                    <NavLink to="https://x.com/Birble_AI" className="footer__description--social_links--link mr-1 cursor-pointer  border-white px-3 py-0.5 w-full h-full bg-transparent transition-transform hover:scale-125 transform scale-125 " target='_blank'>
                    <Icon icon="devicon:twitter" width="26" height="26" />
                    </NavLink>
                </div>
            </div>

            <div className='footer__list  flex flex-col justify-center items-start gap-3 mt-[-100px] pr-5'>
                <h3 className="footer__list--title text-gray-600 font-inter text-xl  font-semibold leading-normal">Browse</h3>

                <NavLink className="footer__list--link no-underline text-white font-inter text-base  font-medium leading-normal" to='/allNFTs'>Marketplace</NavLink>
                <NavLink className="footer__list--link no-underline text-white font-inter text-base  font-medium leading-normal" to='/allCollections'>Collections</NavLink>

            </div>

            <div className='footer__list  flex flex-col justify-center items-start gap-3 mt-[-100px] pr-5 '>
                <h3 className="footer__list--title text-gray-600 font-inter text-xl  font-semibold leading-normal">Creators</h3>
                <a className="footer__list--link no-underline text-white font-inter text-base  font-medium leading-normal" href='/'>Verification</a>
                <a className="footer__list--link no-underline text-white font-inter text-base  font-medium leading-normal" href='/'>NFT Mining</a>
            </div>

            <div className='footer__list about grid mt-[-50px]'>
                <h3 className="footer__list--title text-gray-600 font-inter text-xl  font-semibold leading-normal">About</h3>
                <a className="footer__list--link no-underline text-white font-inter text-base  font-medium leading-normal" href='/team'>Our Team</a>
                <a className="footer__list--link no-underline text-white font-inter text-base  font-medium leading-normal" href='/'>Our Impact</a>
                <a className="footer__list--link no-underline text-white font-inter text-base  font-medium leading-normal" href='/'>See FAQ</a>
                <a className="footer__list--link no-underline text-white font-inter text-base  font-medium leading-normal" href='/'>Terms and conditions</a>
                <a className="footer__list--link no-underline text-white font-inter text-base  font-medium leading-normal" href='/'>Privacy Policy</a>
            </div>
        </footer>
    )
}