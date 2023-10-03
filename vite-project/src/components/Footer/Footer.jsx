// IMPORTING NECESSARY MODULES
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';
// IMPORTING CSS FILE
import './Footer.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer__description'>
                <figure className="footer__description--title">
                    <img 
                        src="../../img/birble.png" 
                        alt="birble-logo"
                        title='birble-logo'
                        loading='lazy'
                        width={100}
                        height={100}
                    />

                    <figcaption>Birble.store</figcaption>
                </figure>

                <p className="footer__description--description">Birble is the largest Cardano NFT marketplace. We believe in people, planet, & purpose before profit. We believe in endlessly supporting creators. We believe in YOU. Join us in our mission to create a brighter future for all.</p>
                
                <div className="footer__description--social_links">
                    <NavLink to="https://www.instagram.com" className="footer__description--social_links--link" target='_blank'>
                    <Icon icon="ri:instagram-fill" width={35} height={35}/>
                    </NavLink>
                    <NavLink to="https://www.facebook.com" className="footer__description--social_links--link" target='_blank'>
                    <Icon icon="ic:baseline-facebook" width={35} height={35}/>  
                    </NavLink>
                    <NavLink to="https://www.telegram.com" className="footer__description--social_links--link" target='_blank'>
                    <Icon icon="ic:baseline-telegram" width={35} height={35}/>
                    </NavLink>
                    <NavLink to="https://www.x.com" className="footer__description--social_links--link" target='_blank'>
                    <Icon icon="ic:baseline-facebook" width={35} height={35}/>
                    </NavLink>
                </div>
            </div>

            <div className='footer__list'>
                <h3 className="footer__list--title">Browse</h3>

                <NavLink className="footer__list--link" to='/allNFTs'>Marketplace</NavLink>
                <NavLink className="footer__list--link" to='/allCollections'>Collections</NavLink>

            </div>

            <div className='footer__list'>
                <h3 className="footer__list--title">Creators</h3>
                <a className="footer__list--link" href='/'>Verification</a>
                <a className="footer__list--link" href='/'>NFT Mining</a>
            </div>

            <div className='footer__list about'>
                <h3 className="footer__list--title">About</h3>
                <a className="footer__list--link" href='/'>Our Team</a>
                <a className="footer__list--link" href='/'>Our Impact</a>
                <a className="footer__list--link" href='/'>See FAQ</a>
                <a className="footer__list--link" href='/'>Terms and conditions</a>
                <a className="footer__list--link" href='/'>Privacy Policy</a>
            </div>
        </footer>
    )
}