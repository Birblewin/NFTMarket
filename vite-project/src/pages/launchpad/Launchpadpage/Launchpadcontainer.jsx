import './launchpad.css'

const Launchpadcontainer = () => {
  return (
    <div>
      <div className="small_screen_launchpad-container_entry">
        <div className="container">
          {/* TITLE OF THE COLLECTION */}
          <h1></h1>

          {/* WHERE SELLING STATS ARE */}
          <div className="container__selling_stats">
            <div className='container__selling_stats--chosen_chain'></div>
            <div className='container__selling_stats--total_sold'></div>
            <div className='container__selling_stats--timing'></div>
          </div>

          {/* WHERE THE IMAGES ARE */}
          <div className="container__image-container">
            <img src="" alt="" />

            <div className="container__image-container--bottom_images">
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>
          </div>

          {/* WHERE THE CONTENT IS */}
          <div className="container__content-container">
            <p></p>

            <div className="container__content-container--paying_stats">
              <h2></h2>

              <figure className="content-container--paying-stats--image">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" color="#e42575">
                  <path d="M20.59 13.91L13.42 21.08C13.2343 21.266 13.0137 21.4135 12.7709 21.5141C12.5281 21.6148 12.2678 21.6666 12.005 21.6666C11.7422 21.6666 11.4819 21.6148 11.2391 21.5141C10.9963 21.4135 10.7757 21.266 10.59 21.08L2 12.5V2.5H12L20.59 11.09C20.9625 11.4647 21.1716 11.9716 21.1716 12.5C21.1716 13.0284 20.9625 13.5353 20.59 13.91V13.91Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  
                  <path d="M7 7.5H7.01" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>

                <figcaption>
                  <span></span>
                  <span></span>
                </figcaption>

                <button>Connect Wallet</button>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Launchpadcontainer