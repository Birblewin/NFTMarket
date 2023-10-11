// IMPORTING NECESSARY FILES
    // IMPORTING NECESSARY MODULES
import { Link } from 'react-router-dom'

// IMPORTING CSS FILE
import './LinkSidePanel.css'

// CREATING A LINKSIDEPANEL FUNCTION THAT RETURNS THE SIDE PANEL
export default function LinkSidePanel(){
    return(
        <div className='link-side-panel-container'>
            <div className='link-side-panel-container__side-panel'>
                <nav className='link-side-panel-container__side-panel--navbar'>
                    <div className='side-panel--navbar--side-buttons'>
                        <p>EN</p>
                        <div>&#8964;</div>
                        <img src="" alt="" />
                    </div>

                    <div className='side-panel--navbar--close-button'>X</div>
                </nav>

                <button className='link-side-panel-container__side-panel--rewards-button'>Rewards</button>

                <div className='link-side-panel-container__side-panel--link-section'>
                    <h4>EXPLORE</h4>

                    <figure>
                        <img src="" alt="" />
                        <Link>All Collections</Link>
                    </figure>

                    <figure>
                        <img src="" alt="" />
                        <Link>All NFTs</Link>
                    </figure>
                </div>

                <div className='link-side-panel-container__side-panel--link-section'>
                    <h4>CREATORS</h4>

                    <figure>
                        <img src="" alt="" />
                        <Link>Create your collection</Link>
                    </figure>

                    <figure>
                        <img src="" alt="" />
                        <Link>Verify your collection</Link>
                    </figure>
                </div>

                <div className='link-side-panel-container__side-panel--link-section'>
                    <h4>ABOUT</h4>

                    <figure>
                        <img src="" alt="" />
                        <Link>Our Team</Link>
                    </figure>

                    <figure>
                        <img src="" alt="" />
                        <Link>Our Impact</Link>
                    </figure>
                </div>

                <div className='link-side-panel-container__side-panel--link-section'>
                    <h4>LAUNCHPAD</h4>

                    <figure>
                        <img src="" alt="" />
                        <Link>Launches</Link>
                    </figure>

                    <figure>
                        <img src="" alt="" />
                        <Link>Apply for launchpad</Link>
                    </figure>
                </div>
            </div>
        </div>
    )
}