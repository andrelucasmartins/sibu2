"use client";

import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
interface CaseSuccessProps {}

export const CaseSuccess = (props: CaseSuccessProps) => {
  return (
    <section className="bg-white text-gray-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-6">
        <h1 className="text-center text-red-600 text-4xl font-bold">
          SIBUTRAN 2 É UM SUCESSO!{" "}
        </h1>
        <p className="text-center text-red-600 text-xl">
          Olha só o que dizem alguns clientes que mudaram suas vidas com o
          Sibutran 2
        </p>

        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, Pagination, FreeMode]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: true,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="mySwiper"
        >
          <SwiperSlide>
            <img alt="..." src="/transferir-3.png" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img alt="..." src="/transferir-4.png" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img alt="..." src="/transferir-6.png" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img alt="..." src="/sibutran2-newdepp-10.png" />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img alt="..." src="/sibutran2-newdepp-22.png" />
          </SwiperSlide>
        </Swiper>
        {/* <Carousel>
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
          />
          <img
            alt="..."
            src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
          />
        </Carousel> */}
      </div>
    </section>
  );
};
