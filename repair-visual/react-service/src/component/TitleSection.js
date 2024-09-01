import React from 'react';
import './style/TitleSection.css';

const TitleSection = () => {
    return (
        <div className="header-wrapper">
            <div className="header-container">
                <div className="header-content">
                    <h1><span className="highlight">Частный мастер</span> по ремонту стиральных машин Сергей</h1>
                    <p>Обратитесь к частному мастеру и сэкономьте до 40% стоимости ремонта Вашей стиральной машины</p>
                    <div className="buttons">
                        <a href="#form" className="btn-primary">
                            Оставить заявку
                        </a>
                        <a href="tel:+79637304935" className="btn-secondary">
                            <i className="fas fa-phone-alt"></i> +79637304935
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleSection;
