import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style/ReviewSlider.css';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

const ReviewSlider = ({ reviews }) => {
    return (
        <div className="review-slider-container">
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}  // Установим 0px между слайдами
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation
                loop
            >
                {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                        <div className="review-slide">
                            <div className="review-image-wrapper">
                                <img src={review.image} alt={`Review ${index}`} className="review-image" />
                                <div className="review-title">{review.title}</div>
                                <div className="review-overlay">
                                    <p className="review-caption">{review.caption}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ReviewSlider;
