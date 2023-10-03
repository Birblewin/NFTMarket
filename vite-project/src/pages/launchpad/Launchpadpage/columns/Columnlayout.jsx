import './style.css'
import { Icon } from '@iconify/react';
const Columnlayout = () => {
  return (
    <div className="two-column">
          <div className="left-column">
        {/* Content for the left column */}
        <h2>Reazy Cleacks Collection</h2>
        <div className='socials'>
        <button id='bt'><a href="/"><Icon icon="tabler:world" width={40} height={40}/></a></button>
        <button id='bt'><a href="https://discord.com/login"><Icon icon="ic:baseline-discord" width={40} height={40}/></a></button>     
        <button id='bt'><a href="https://discord.com/login"></a><Icon icon="mdi:github" width={40} height={40} color='#551A8B'/></button>
        </div>
        &nbsp;
       <p>We are Reezy cleeks Collection. A next-gen collectible brand bringing popular web3 IP to life.</p>&nbsp;
        <p>Season 1 is our first range of products, licensing IP from popular web3 brands, we create high quality limited edition figure drops. So far we have partnered with the likes of Liberty Square and y00ts. With every drop we expand our community of collectors, strengthen our network and delivering more quality products but rest assured we have big ambitions and plans to scale further beyond the NFT space in the near future.</p>
        &nbsp;
        <p>
        The next addition to our Season 1 range is no other than the Famous Fox Federation. You can mint your digital FFF figure then use our seamless `redeem shop` to pay shipping, claim your physical figure, and FREE Geek Card NFT. This time we have two versions that can be minted, 250 of each, 500 total. Limited edition will never re-run. With AR activations, custom branded packaging and custom `pop protector` enjoy a unique unboxing experience like no other!
        </p>
        &nbsp;
        <h2>Utility</h2>
        &nbsp;
        <ul>
          <li>Tangible IRL utility. Redeem your digital figure for the physical version.</li>
          <li>Enjoy access to Sleek Geeks community of likeminded collectors, raffles, airdrops and more with your FREE Geek Card NFT when you claim your physicals.</li>
        </ul>
      </div>
      <div className="right-column">
        {/* Content for the right column */}
        <h2>Vision</h2>
        &nbsp;
        <p>Meet our talented team members.</p>
        <ul>
          
          <li>~1 week after mint: Redemption will be live for the FFF collab and collectors can redeem, pay shipping and claim their physical figure as well as FREE Geek Card NFT</li>
          <li>~2 week after mint: New Geek Card rewards roll out for our collectors</li>
          <li>~8/10 weeks after mint: Figures ship out and tracking becomes available</li>
          <li>~11/12 weeks after mint: Figures arrives with collectors</li>
          <li>~1 week after mint: Redemption will be live for the FFF collab and collectors can redeem, pay shipping and claim their physical figure as well as FREE Geek Card NFT</li>
          <li>~2 week after mint: New Geek Card rewards roll out for our collectors</li>
          <li>~8/10 weeks after mint: Figures ship out and tracking becomes available</li>
          <li>~11/12 weeks after mint: Figures arrives with collectors</li>

        </ul>
      </div>
  </div>
  )
}

export default Columnlayout