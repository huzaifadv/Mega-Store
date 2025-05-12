import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import hero1 from '/src/assets/images/1.png'
import hero2 from '/src/assets/images/2.png'
import hero3 from '/src/assets/images/3.png'
import hero4 from '/src/assets/images/4.png'

import { EffectCube, Pagination, Autoplay } from 'swiper/modules';

export default function Hero() {
    return (
        <>
            <Swiper
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                    shadow: false,
                    slideShadows: false,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                }}
                pagination={true}
                autoplay={{
                    delay: 2000, // Change slide every 3 seconds
                    disableOnInteraction: false,
                }}
                modules={[EffectCube, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={hero1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hero2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hero3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={hero4} />
                </SwiperSlide>
            </Swiper>
        </>
    );
}
