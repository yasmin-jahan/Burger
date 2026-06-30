import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Brand1 from '../../assets/brands/brand-11.png'
import Brand2 from '../../assets/brands/brand-12.png'
import Brand3 from '../../assets/brands/brand-13.png'
import Brand4 from '../../assets/brands/brand-14.png'
import Brand5 from '../../assets/brands/brand-15.png'
import Brand6 from '../../assets/brands/brand-16.png'
import Brand7 from '../../assets/brands/brand-17.png'
import Brand8 from '../../assets/brands/brand-18.png'


function Section3() {
    return (
        <section className='brand_slider_section'>
            <Container>
                <Row>
                    <Swiper
                        modules={[Navigation, Pagination]}
                        navigation
                        pagination={{ clickable: true }}
                        // spaceBetween={30}
                        slidesPerView={1}
                        loop
                        breakpoints={{
                            480: {
                                slidesPerView: 2,
                            },
                            768:{
                              slidesPerView: 3,
                              spaceBetween: 30,
                            },
                            1199: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        <SwiperSlide>
                            <div className="brand_img">
                                <img src={Brand1} alt="brand-1" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <div className="brand_img">
                                <img src={Brand2} alt="brand-1"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <div className="brand_img">
                                <img src={Brand3} alt="brand-1" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <div className="brand_img">
                                <img src={Brand4} alt="brand-1" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <div className="brand_img">
                                <img src={Brand5} alt="brand-1"/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <div className="brand_img">
                                <img src={Brand6} alt="brand-1"  />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <div className="brand_img">
                                <img src={Brand7} alt="brand-1" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide> 
                            <div className="brand_img">
                                <img src={Brand8} alt="brand-1"  />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </Row>
            </Container>
        </section>
    )
}

export default Section3