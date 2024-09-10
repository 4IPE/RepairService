import React from 'react';

import './App.css';
import Header from "./component/Header";
import Features from "./component/Features";
import TitleSection from "./component/TitleSection";
import TestimonialsSlider from "./component/TestimonialsSlider";
import ReviewSlider from "./component/ReviewSlider";
import Advantages from "./component/Advantages";
import FormSection from "./component/FormSection";
import Footer from "./component/Footer";

function App() {
    const reviews = [
        {
            emoji: "🏠",
            title: "О компании РемонтЭкспрес",
            description: 'Мы — эксперты в ремонте стиральных машин. Специализируемся на высококачественном сервисе для частных клиентов и бизнеса. Более 9 лет на рынке.',
        },
        {
            emoji: "🛠️",
            title: "Квалификация специалистов",
            description: 'Все наши мастера проходят регулярное обучение и сертификацию. Опыт работы каждого специалиста — от 7 лет. Гарантия высокого уровня профессионализма и знаний современных технологий.',
        },
        {
            emoji: "🔧",
            title: "Качество работы",
            description: 'Мы используем только оригинальные запчасти и проверенные методики ремонта. Работаем с моделями всех известных брендов. Ремонт в кратчайшие сроки с максимальным качеством исполнения.',
        },
        {
            emoji: "📈",
            title: "Преимущества для клиентов",
            description: 'Быстрая диагностика на дому. Гибкое ценообразование и прозрачность всех услуг. Гарантия на выполненные работы и замененные детали.',
        },
        {
            emoji: "🌟",
            title: "Отзывы и доверие клиентов",
            description: 'Множество довольных клиентов. Положительные отзывы и рекомендации. Мы стремимся к долгосрочным отношениям с клиентами на основе доверия и качества.',
        },
    ];

    return (
      <div>
          <Header/>
          <div>
              <TitleSection/>
          </div>
          <div id="form">
              <FormSection/>
          </div>
          <div id="about">
              <ReviewSlider reviews={reviews}/>
          </div>
          <div id="services">
              <Features/>
          </div>
          <div id="testimonials">
              <TestimonialsSlider/>
          </div>
          <div>
              <Advantages/>
          </div>
          <div>
              <Footer/>
          </div>
      </div>
  );
}

export default App;
