import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function ProjectCarousel({ images }) {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      style={styles.swiper}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          <img src={img} alt="" style={styles.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const styles = {
  swiper: {
    marginTop: "1rem",
  },
  image: {
    width: "100%",
    borderRadius: "8px",
    border: "1px solid #334155",
  },
};
