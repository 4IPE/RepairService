import React from 'react';

import './App.css';
import Header from "./component/Header";
import Features from "./component/Features";
import TitleSection from "./component/TitleSection";
import TestimonialsSlider from "./component/TestimonialsSlider";
import ReviewSlider from "./component/ReviewSlider";
import image1 from './component/image/b69ded66-7c1a-4003-b82a-552440619688.jpg';
import image2 from './component/image/logo/b0f7c67c-f229-434e-ba21-2a9e4c7ec488.jpg';
import image3 from './component/image/logo/38d74e8a-28c8-41c2-a3bf-3aacedfee8d0.jpg';
import Advantages from "./component/Advantages";
import PriceList from "./component/PriceList";
import FormSection from "./component/FormSection";

function App() {
    const reviews = [
        {
            image: image1,
            title: "Titel1",
            caption: 'Отличная компания, быстро и качественно!',
        },
        {
            image: image2,
            title: "Titel2",
            caption: 'Профессиональный подход и высокое качество услуг.',
        },
        {
            image: image3,
            title: "Titel3",
            caption: 'Я очень доволен работой этой команды!',
        },
    ];
  return (
      <div>
          <Header/>
          <div>
              <TitleSection/>
          </div>
          <div id = "form">
              <FormSection/>
          </div>
          <div id="about">
              <ReviewSlider reviews={reviews}/>
          </div>
          <div id="services">
              <Features/>
          </div>
          <div id="pricelist">
              <PriceList/>
          </div>
          <div>
              <Advantages/>
          </div>
          <div id="testimonials">
              <TestimonialsSlider/>
          </div>
      </div>
  );
}

export default App;
