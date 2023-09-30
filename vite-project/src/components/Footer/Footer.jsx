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
                    <a href="/" className="footer__description--social_links--link" target='_blank'>
                        <img 
                            src="../../../img/social_logos/InstagramPNG4.png" 
                            alt="Instagram_logo"
                            title='Instagram_account'
                            loading='lazy'
                            width={35}
                            height={30}
                        />
                    </a>

                    <a href="/" className="footer__description--social_links--link" target='_blank'>
                        <img 
                            src="../../../img/social_logos/FacebookPNG4.png" 
                            alt="Facebook_logo"
                            title='Facebook_account'
                            loading='lazy'
                            width={35}
                            height={30}
                        />
                    </a>

                    <a href="/" className="footer__description--social_links--link" target='_blank'>
                        <img 
                            src="../../../img/social_logos/Telegram_logo_PNG1.png" 
                            alt="Telegram_logo"
                            title='Telegram_account'
                            loading='lazy'
                            width={35}
                            height={30}
                        />
                    </a>

                    <a href="/" className="footer__description--social_links--link" target='_blank'>
                        <img 
                            src="../../../img/social_logos/Twitter_logo_PNG15.png" 
                            alt="Twitter_logo"
                            title='Twitter_account'
                            loading='lazy'
                            width={35}
                            height={30}
                        />
                    </a>
                </div>
            </div>

            <div className='footer__list'>
                <h3 className="footer__list--title">Browse</h3>
                <a className="footer__list--link" href='/'>Marketplace</a>
                <a className="footer__list--link" href='/'>Collections</a>
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