// IMPORTING NECESSARY MODULES
import { NavLink } from 'react-router-dom'

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
                        <img 
                            src="../../../img/social_logos/InstagramPNG4.png" 
                            alt="Instagram_logo"
                            title='Instagram_account'
                            loading='lazy'
                            width={35}
                            height={30}
                        />
                    </NavLink>

                    <NavLink to="https://www.facebook.com" className="footer__description--social_links--link" target='_blank'>
                        <img 
                            src="../../../img/social_logos/FacebookPNG4.png" 
                            alt="Facebook_logo"
                            title='Facebook_account'
                            loading='lazy'
                            width={35}
                            height={30}
                        />
                    </NavLink>

                    <NavLink to="https://www.telegram.com" className="footer__description--social_links--link" target='_blank'>
                        <img 
                            src="../../../img/social_logos/Telegram_logo_PNG1.png" 
                            alt="Telegram_logo"
                            title='Telegram_account'
                            loading='lazy'
                            width={35}
                            height={30}
                        />
                    </NavLink>

                    <NavLink to="https://www.x.com" className="footer__description--social_links--link" target='_blank'>
                        <img 
                            src="../../../img/social_logos/Twitter_logo_PNG15.png" 
                            alt="Twitter_logo"
                            title='Twitter_account'
                            loading='lazy'
                            width={35}
                            height={30}
                        />
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
                <NavLink className="footer__list--link" to='/'>Verification</NavLink>
                <NavLink className="footer__list--link" to='/'>NFT Mining</NavLink>
            </div>

            <div className='footer__list about'>
                <h3 className="footer__list--title">About</h3>
                <NavLink className="footer__list--link" to='/'>Our Team</NavLink>
                <NavLink className="footer__list--link" to='/'>Our Impact</NavLink>
                <NavLink className="footer__list--link" to='/'>See FAQ</NavLink>
                <NavLink className="footer__list--link" to='/'>Terms and conditions</NavLink>
                <NavLink className="footer__list--link" to='/'>Privacy Policy</NavLink>
            </div>
        </footer>
    )
}