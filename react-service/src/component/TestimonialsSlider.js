import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './style/TestimonialsSlider.css'

const testimonials = [
    {
        id: 1,
        name: 'Иван',
        text: 'Спасибо! Были предложены различные варианты выполнения работы для выбора наиболее оптимального! Все сделано быстро в срок! Буду ещё обращаться! Отличный специалист!',
        image: 'https://i.1.creatium.io/8a/ff/6b/6e1a1c7a5631a2a7dbb5163450c19b9836/154x154q8/screenshot_7.png'
    },
    {
        id: 2,
        name: 'Анна',
        text: 'Профессионалы своего дела. Очень доходчиво объяснили строителям, как правильно сделать разводку воды в квартире.',
        image: 'https://i.1.creatium.io/63/4a/f6/562ef0f6f28a2d480fb7d1f11cd63f230b/154x154q8/screenshot_8.png'
    },
];

const TestimonialsSlider = () => {
    return (
        <div className="container">
            <h2>Отзывы о нас</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
            >
                {testimonials.map(testimonial => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="testimonial">
                            <div className="testimonial-image">
                                <img src={testimonial.image} alt={testimonial.name} />
                            </div>
                            <div className="testimonial-content">
                                <h3>{testimonial.name}</h3>
                                <p>{testimonial.text}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialsSlider;
