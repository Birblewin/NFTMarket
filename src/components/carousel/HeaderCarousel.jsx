/* eslint-disable react/prop-types */
// EXPORTING THE HEADERCAROUSEL FUNCTIONS
export default function HeaderCarousel(props){
    return(
        <div>
            <div className="small-screen-container-entry block sm:hidden">
                <div className="w-full flex items-center justify-around gap-[20px] my-0 mx-auto flex-col">
                    <div>{props.carouselItems[props.currentCarouselItem]}</div>

                    <div className="w-full flex justify-center items-center gap-[20px] mt-[20px] ">
                        {props.dotScrollerButtonsGrid || <div className="w-full flex justify-center items-center gap-[20px] mt-[20px] ">
                            {props.dotScrollerButtons}
                        </div>}
                    </div>
                </div>
            </div>

            <div className="medium-screen-container-entry hidden sm:block">
                <div className="carousel-container w-full flex items-center justify-around gap-[20px] my-0 mx-auto flex-row">
                    <button 
                        className="carousel-container__button border-none w-[49px] bg-transparent text-[gray] text-[50px] transition-all duration-500 ease-in-out mt-[20px] hover:scale-[1.114] hover:text-white hover:bg-carousel-container__button++hover h-[104px] my-0 mx-[20px]"
                        onClick={props.checkPreviousItem}
                    >&lt;</button>

                    <div className="flex flex-col w-full gap-[10px]">
                        {props.carouselItems[props.currentCarouselItem]}

                        {props.dotScrollerButtonsGrid || <div className="w-full flex justify-center items-center gap-[20px] mt-[20px] ">
                            {props.dotScrollerButtons}
                        </div>}
                    </div>

                    <button 
                        className="carousel-container__button border-none w-[49px] bg-transparent text-[gray] text-[50px] transition-all duration-500 ease-in-out mt-[20px] hover:scale-[1.114] hover:text-white hover:bg-carousel-container__button++hover h-[104px] my-0 mx-[20px]"
                        onClick={props.checkNextItem}
                    >&gt;</button>
                </div>
            </div>
        </div>
    )
}