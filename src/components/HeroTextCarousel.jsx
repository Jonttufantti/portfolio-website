import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

export default function HeroTextCarousel() {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop
      slidesPerView={1}
      allowTouchMove={false}
      style={styles.swiper}
    >
      <SwiperSlide>
        <p style={styles.text}>
          Hello, I’m Joona — an IT Engineer from Finland.
        </p>
      </SwiperSlide>

      <SwiperSlide>
        <p style={styles.text}>
          I learn fast, build with care, and love a good challenge.
        </p>
      </SwiperSlide>

      <SwiperSlide>
        <p style={styles.text}>
          Interested in working together? Let’s get in touch.
        </p>
      </SwiperSlide>
    </Swiper>
  );
}

const styles = {
  swiper: {
    width: "100%",
    maxWidth: "500px",
    marginLeft: 0,
    marginRight: "auto",
  },

  text: {
    color: "#cbd5f5",
    fontSize: "1.4rem",
    lineHeight: 1.6,
  },
};
