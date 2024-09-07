import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const testimonials = [
    {
        id: 1,
        name: 'Иван',
        videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_1', // Замените на ID видео
    },
    {
        id: 2,
        name: 'Анна',
        videoUrl: 'https://www.youtube.com/watch?v=VIDEO_ID_2', // Замените на ID видео
    },
];

const TestimonialsSlider = () => {
    return (
        <div className="container">
            <h2>Отзывы о нас</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000 }}
                loop
            >
                {testimonials.map(testimonial => (
                    <SwiperSlide key={testimonial.id}>
                        <div className="testimonial">
                            <a href={testimonial.videoUrl} target="_blank" rel="noopener noreferrer">
                                <iframe
                                    width="100%"
                                    height="315"
                                    src={`https://www.youtube.com/embed/${testimonial.videoUrl.split('v=')[1]}`} // Встраивание видео
                                    title={testimonial.name}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialsSlider;
