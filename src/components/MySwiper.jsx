import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import { Autoplay } from "swiper/modules";
const MySwiper = () => {
  return (
    <Swiper
      direction={"vertical"}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper h-[50px] inline-block rounded-[10px] p-[5px]    "
    >
      <SwiperSlide className="h-full w-full  ">
        <p className="font-[700]">Lethabo
        </p>
      </SwiperSlide>
      <SwiperSlide className="h-full flexw-full ">
        <p className="font-[700]">Anyango</p>
      </SwiperSlide>
      <SwiperSlide className="h-full w-full  ">
        <p className="font-[700]">Kofo
        </p>
      </SwiperSlide>
      <SwiperSlide className="h-full w-full  ">
        <p className="font-[700]">Amani
        </p>
      </SwiperSlide>
      <SwiperSlide className="h-full w-full  ">
        <p className="font-[700]">Seun
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
