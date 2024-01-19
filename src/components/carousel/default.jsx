// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
export default function DefaultCarousel(data) {
  const images = data?.data;

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      initialSlide={1}
      modules={[Pagination]}
      className="w-8/12 h-3/5"
    >
      {images?.map((i) => (
        <SwiperSlide key={i.name}>
          <img className="w-full h-full" src={i.name} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
