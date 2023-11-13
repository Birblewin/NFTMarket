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

                    <figcaption className=' font-inter text-2xl font-semibold'>Birble.store</figcaption>
                </figure>

                <p className="footer__description--description text-gray-400 font-inter text-base font-normal leading-normal whitespace-normal max-w-prose">Birble is the largest Cardano NFT marketplace. We believe in people, planet, & purpose before profit. We believe in endlessly supporting creators. We believe in YOU. Join us in our mission to create a brighter future for all.</p>
                
                <div className="footer__description--social_links flex justify-between items-center mt-5">
                    <NavLink to="https://github.com/Birblewin" className="footer__description--social_links--link mr-1 cursor-pointer  border-white px-3 py-0.5 w-full h-full bg-transparent transition-transform hover:scale-125 transform scale-125 " target='_blank'>
                    <Icon icon="ant-design:github-filled" color="#9ca3af" width="26" height="26" />
                    </NavLink>
                    <NavLink to="https://www.facebook.com/profile.php?id=100085621089512" className="footer__description--social_links--link mr-1 cursor-pointer  border-white px-3 py-0.5 w-full h-full bg-transparent transition-transform hover:scale-125 transform scale-125 " target='_blank'>
                    <Icon icon="logos:discord-icon" width="26" height="26" /> 
                    </NavLink>
                    <NavLink to="https://t.me/birblemain" className="footer__description--social_links--link mr-1 cursor-pointer  border-white px-3 py-0.5 w-full h-full bg-transparent transition-transform hover:scale-125 transform scale-125 " target='_blank'>
                    <Icon icon="logos:telegram" width="26" height="26" />
                    </NavLink>
                    <NavLink to="https://x.com/Birble_AI" className="footer__description--social_links--link mr-1 cursor-pointer  border-white px-3 py-0.5 w-full h-full bg-transparent transition-transform hover:scale-125 transform scale-125 " target='_blank'>
                    <Icon icon="pajamas:twitter" color="#9ca3af" width="26" height="26" />
                    </NavLink>
                    <NavLink to="https://www.linkedin.com/in/birble-ai-3a73a8250/" className="footer__description--social_links--link mr-1 cursor-pointer  border-white px-3 py-0.5 w-full h-full bg-transparent transition-transform hover:scale-125 transform scale-125 " target='_blank'>
                    <Icon icon="skill-icons:linkedin" width="26" height="26" />
                    </NavLink>
                </div>
            </div>

            <div className='footer__list  flex flex-col justify-center items-start gap-3 mt-[-100px] pr-5'>
                <h3 className="footer__list--title text-gray-600 font-inter text-xl  font-semibold leading-normal">Browse</h3>

                <NavLink className="footer__list--link no-underline  font-inter text-base  font-medium leading-normal" to='/explore/allNFTs'>Marketplace</NavLink>
                <NavLink className="footer__list--link no-underline  font-inter text-base  font-medium leading-normal" to='/explore/allCollections'>Collections</NavLink>

            </div>

            <div className='footer__list  flex flex-col justify-center items-start gap-3 mt-[-100px] pr-5 '>
                <h3 className="footer__list--title text-gray-600 font-inter text-xl  font-semibold leading-normal">Creators</h3>
                <NavLink className="footer__list--link no-underline  font-inter text-base  font-medium leading-normal" to='/creators/verification'>Verification</NavLink>
                <NavLink className="footer__list--link no-underline  font-inter text-base  font-medium leading-normal" to='/creators/mining'>NFT Mining</NavLink>
            </div>

            <div className='footer__list about grid mt-[-50px]'>
                <h3 className="footer__list--title text-gray-600 font-inter text-xl  font-semibold leading-normal">About</h3>
                <NavLink className="footer__list--link no-underline  font-inter text-base  font-medium leading-normal" to='/about/team'>Our Team</NavLink>
                <NavLink className="footer__list--link no-underline  font-inter text-base  font-medium leading-normal" to='/about/impact'>Our Impact</NavLink>
                <NavLink className="footer__list--link no-underline  font-inter text-base  font-medium leading-normal" to='/about/FAQ'>See FAQ</NavLink>
                <NavLink className="footer__list--link no-underline  font-inter text-base  font-medium leading-normal" to='/about/T&C'>Terms and conditions</NavLink>
                <NavLink className="footer__list--link no-underline  font-inter text-base  font-medium leading-normal" href='/about/privacy-policy'>Privacy Policy</NavLink>
            </div>
        </footer>
    )
}