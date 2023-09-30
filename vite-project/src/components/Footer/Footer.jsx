import './Footer.css'

export default function Footer(){
    return(
        <footer className='footer'>
            <div className='footer__description'>
                <figure className="footer__description--title">
                    <img 
                        src="../../public/img/birble.png" 
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
                        <img src="" alt="" />
                    </a>

                    <a href="/" className="footer__description--social_links--link" target='_blank'>
                        <img src="" alt="" />
                    </a>

                    <a href="/" className="footer__description--social_links--link" target='_blank'>
                        <img src="" alt="" />
                    </a>

                    <a href="/" className="footer__description--social_links--link" target='_blank'>
                        <img src="" alt="" />
                    </a>
                </div>
            </div>

            <div className='footer__browse'>
                <h3 className="footer__browse--title"></h3>
                <p className="footer__browse--link"></p>
                <p className="footer__browse--link"></p>
            </div>

            <div className='footer__creators'>
                <h3 className="footer__browse--title"></h3>
                <p className="footer__browse--link"></p>
                <p className="footer__browse--link"></p>
            </div>

            <div className='footer__about'>
                <h3 className="footer__browse--title"></h3>
                <p className="footer__browse--link"></p>
                <p className="footer__browse--link"></p>
                <p className="footer__browse--link"></p>
                <p className="footer__browse--link"></p>
            </div>
        </footer>
    )
}