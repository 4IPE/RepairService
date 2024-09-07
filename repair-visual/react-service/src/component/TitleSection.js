import React from 'react';
import './style/TitleSection.css';
import logo from './image/logo/af46c33b-7203-445c-a113-367d79f0158b.png';

const TitleSection = () => {
    return (
        <div className="title-wrapper">
            <div className="title-container">
                <div className="title-content">
                    <h1>Ремонт стиральных машин от <span className="highlight">500 ₽</span></h1>
                    <ul className="bullets">
                        <li>Мастер будет у вас в течение часа!</li>
                        <li>Диагностика неисправности 20 минут!</li>
                        <li>Гарантия до 1 года!</li>
                    </ul>
                    <div className="buttons">
                        <a href="#form" className="btn-primary">
                            Вызвать мастера
                        </a>
                    </div>
                </div>
                <div className="title-image-container">
                    <img src={logo} alt="Мастер" className="title-image" />
                </div>
            </div>
        </div>
    );
};

export default TitleSection;
