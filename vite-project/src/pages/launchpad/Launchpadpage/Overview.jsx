// IMPORT NECESSARY FILES
  // IMPORT NECESSARY MODULES
import { Link } from 'react-router-dom'

// IMPORT CSS FILES
import './Overview.css'

// A FUNCTION THAT EXPORTS THE OVERVIEW SECTION AS THE DEFAULT
export default function Overview(){
  return (
    <div className="small_screen_overview_entry">
      <div className="overview-container">
        <h2>D3fenders</h2>
        
        <div className="overview-container__socials">
          <Link 
            to="https://d3fenders.gitbook.io/d3fenders/" 
            target="_blank"
            className='overview-container__socials--website'
          >
            <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </Link>

          <Link 
            to="https://discord.com/invite/D3fenders" 
            target="_blank"
            className='overview-container__socials--discord'
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
              <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
            </svg>
          </Link>

          <Link 
            href="https://twitter.com/d3fenders" 
            target="_blank"
            className='overview-container__socials--twitterX'
          >
            <svg width="20" height="20" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" size="20">
              <path d="M11.3032 9.42806L16.4029 3.5H15.1945L10.7663 8.64725L7.2296 3.5H3.15039L8.49863 11.2836L3.15039 17.5H4.35894L9.03516 12.0644L12.7702 17.5H16.8494L11.3029 9.42806H11.3032ZM9.6479 11.3521L9.10601 10.5771L4.7944 4.40978H6.65066L10.1302 9.38698L10.6721 10.162L15.195 16.6316H13.3388L9.6479 11.3524V11.3521Z" fill="#f5f3f7"></path>
            </svg>
          </Link>
        </div>
        
        <div className="overview-container__description">
          <p>The D3fenders Mission is to create an effective way to secure NFTs from theft.
            We provide NFT holders with peace of mind, knowing that their assets are protected by a secure, reliable, and self-governed protocol. Our protocol acts as a fortress around our clients most valued digital collectibles</p>

          <p>In the world of digital assets and collectibles, the threat of theft looms large. If your wallet is compromised, and invaders manage to siphon off your valuable assets, you are left helpless with no means to stop the relentless drain. Traditional solutions like hardware wallets, exemplified by products like Ledger, although effective, pose their own set of challenges. They are notably expensive and not particularly user-friendly, making them less accessible to a wide user base. However, for users who hold high-value NFTs, the stakes are high. In this context, a protocol designed to prevent NFT theft becomes invaluable. It acts as a robust double barrier and a fail-safe mechanism against intrusion. By utilizing this protocol, individuals not only secure their digital assets but also gain an extra layer of protection, ensuring that their investments remain safe and sound in the unpredictable landscape of the digital realm.</p>
        </div>

        <div className="overview-container__utility">
          <h2>Utility</h2>
          
          <p>Our solution is to develop a simple protocol that secures your NFT in your wallet. The D3fender Protocol gives you the ability to send your NFT to another wallet with your command before unlocking. Essentially it functions like a hardware lock but without hardware, and a little secret sauce, so that you can remove your assets if your wallet is compromised. The user controls their assets at all stages.</p>
          
          <p>What makes the D3fender Protocol V1 unique?</p>
          <p>Our protocol ensures an indestructible experience by implementing two critical functions:</p>

          <ul>
            <li>Assurance that you have command over your assets</li>
            <li>Ability to migrate your assets, even when main wallet is drained</li>
          </ul>

          <p>When these two barriers are enabled your collectibles are SAF3.</p>
        </div>

        <div className="overview-container__partnerships">
          <h2>Partnerships</h2>

          <ul>
            <li>We are partnering with Guacamole.gg to provide our security protocol to the broader Solana Community and beyond through the integration of the D3fenders Protocol within the Guac toolset.</li>
            <li>D3fenders has been working with Pen Frens and 42 Hamsters Developer Studio to generate our final art and in designing the infrastructure for D3fenders Protocol.</li>
            <li>We have partnered with Hello Moon to utilize their exceptional developer team in order to build and prepare for the release of the D3fenders Protocol.</li>
          </ul>
        </div>
        
        <div className="overview-container__visions">
          <h2>Vision</h2>

          <ul className='overview-container__visions--list'>
            <li className='visions--list--entry'>
              <div className='list--entry--circle_and_line'>
                <div className='entry--circle_and_line--circle'>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="#fff" width="16" height="16" xmlns="http://www.w3.org/2000/svg" >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                
                <div className='entry--circle_and_line--line'></div>
              </div>
              
              <div className='list--entry--description'>
                <h3>Phase 1 - D3fender Protocol Development</h3>
                
                <p>Upon development and release of the D3fender Protocol, holders of the D3fenders NFTs will be able to lock and unlock unlimited NFTs for free &amp; non-holders will pay a nominal fee to use.</p>
              </div>
            </li>
            
            <li className='visions--list--entry'>
              <div className='list--entry--circle_and_line'>
                <div className='entry--circle_and_line--circle'>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="#fff" width="16" height="16" xmlns="http://www.w3.org/2000/svg" >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                
                <div className='entry--circle_and_line--line'></div>
              </div>
              
              <div className='list--entry--description'>
                <h3>Phase 2 - Multichain</h3>
                
                <p>After a successful Solana launch, our team will begin building our protocol on multiple chains as well as building new integration partnerships along the way.</p>
              </div>
            </li>
            
            <li className='visions--list--entry'>
              <div className='list--entry--circle_and_line'>
                <div className='entry--circle_and_line--circle'>
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" color="#fff" width="16" height="16" xmlns="http://www.w3.org/2000/svg" >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                
                <div className='entry--circle_and_line--line'></div>
              </div>
              
              <div className='list--entry--description'>
                <h3>Phase 3 - Expansion</h3>
                
                <p>Our ongoing goal is to continue building useful security protocols &amp; to create partnerships with network-specific wallets.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <footer>
          <p>Certain information has been prepared by third parties, including the Creator using Launchpad. Magic Eden is not affiliated with such third parties or the Creator, and is not responsible for the information provided on Launchpad. Such information is provided for informational purposes only and is in no way investment advice. Magic Eden is not liable for any errors, changes or amendments to such information, including any actions taken in reliance on such information. Magic Eden makes no representation on the accuracy, suitability, or validity of any information provided in relation to any NFT project that chooses to use Launchpad.</p>

          <p>By clicking “Mint”, I acknowledge that I am choosing to mint the NFT with the understanding that it may be worth significantly less than the mint price, and may end up being worth nothing at all.</p>
        </footer>
      </div>
    </div>
  )
}