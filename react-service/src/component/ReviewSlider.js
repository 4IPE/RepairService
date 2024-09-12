import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style/ReviewSlider.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const ReviewSlider = ({ reviews }) => {
    return (
        <div>
            <h2>Что говорят о нас клиенты</h2>
            <div className="text-slider-container">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}  // Пространство между слайдами
                    slidesPerView={1}
                    autoplay={{
                        delay: 5000,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation
                    loop
                >
                    {reviews.map((review, index) => (
                        <SwiperSlide key={index}>
                            <div className="text-slide">
                                <div className="emoji">{review.emoji}</div>
                                <div className="text-content">
                                    <h3 className="review-title">{review.title}</h3>
                                    <p className="review-description">{review.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default ReviewSlider;
