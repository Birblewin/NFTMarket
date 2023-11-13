import Details from "../carousel/NFTDetails";
import { Icon } from "@iconify/react";
import { Navigation, Pagination, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Cards = () => {
  const carouselCards = Details.map((nft, index) => (
    <SwiperSlide key={index} className="mb-10 px-10"> 
    <div  className="flex flex-col md:flex md:flex-row   ">
      <div >
        <img
        className="rounded-lg"
          src={nft.cardImage}
          alt={`Image ${index}`}
          width="100"
          height="100"
        />
      </div>

      <div className="p-2.5 text-sm text-text-gray">
        <span className="flex flex-row items-center bg-greenish w-fit px-2 py-1 rounded-md">
          <Icon icon="mdi:cart" color="#0e9f6e" />
          <p className="text-text-green text-xs">Purchase</p>
        </span>
        <p>{Details[index].cardTitle}</p>
        <p className="text-md font-bold ">{Details[index].price}</p>
        <p>{Details[index].released}</p>
      </div>
    </div>
    </SwiperSlide>
  ));

  return (
    <div className="flex justify-center w-full lg:w-4/5">
      <Swiper 
           modules={[Navigation, Pagination, A11y]}
           spaceBetween={10}
           slidesPerView={3}
           navigation
           pagination={{ clickable: true }}

      >
        {carouselCards}
        
      </Swiper>
    </div>
  );
};

export default Cards;
