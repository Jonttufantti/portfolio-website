import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

export default function ProjectCarousel({ images, isMobile }) {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      style={styles.swiper}
    >
      {images.map((img, i) => (
        <SwiperSlide key={i}>
          {isMobile ? (
            <div className="phone-frame">
              <img src={img} alt="" />
            </div>
          ) : (
            <img src={img} alt="" style={styles.image} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

const styles = {
  swiper: {
    marginTop: "1rem",
    position: "relative",
    zIndex: 0,
  },
  image: {
    width: "100%",
    maxHeight: "500px",
    objectFit: "contain",
    borderRadius: "8px",
    border: "1px solid #334155",
    backgroundColor: "#0f172a",
  },
};
