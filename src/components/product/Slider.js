import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

export default function Slider({images}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[Navigation, Thumbs]}
                className="mySwiper2"
            >
                {images.map( (img, i) => <SwiperSlide key={i}>
                    <img src={img} />
                </SwiperSlide>)}

            </Swiper>
            <Swiper
                // onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={10}
                slidesPerView={4}
                watchSlidesProgress={true}
                modules={[Navigation, Thumbs]}
                className="mySwiper"
            >

                {images.map( (img, i) => <SwiperSlide key={i}>
                    <img src={img} />
                </SwiperSlide>)}


            </Swiper>
        </>
    );
}
