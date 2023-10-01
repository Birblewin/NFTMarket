// EXPORTING DEFAULT CAROUSELENTRY FUNCTION
export default function CarouselEntry(){
    return(
        <div className="carousel_entry_container">
            <img src="" alt="" />
            
            <div className="carousel_entry_container__description">
                <h1 className="carousel_entry_container__description--title"></h1>
                <span className="carousel_entry_container__description--banner"></span>
                <p className="carousel_entry_container__description--paragraph"></p>

                <div>
                    <div className="carousel_entry_container__description--buttons">
                        <span className="description--buttons--calender"></span>
                        <button className="description--buttons--link"></button>
                    </div>
                </div>
            </div>
        </div>
    )
}