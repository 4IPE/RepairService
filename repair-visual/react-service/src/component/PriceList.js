import React from 'react';
import './style/PriceList.css';


const PriceCard = ({ title, price, description, link }) => (
    <div className="price-card">
        <div className="price-card__wrapper">
            <div className="price-card__title">
                <a href={link}>{title}</a>
            </div>
            <div className="price-card__description">{description}</div>
            <div className="price-card__footer">
                <div className="price-card__footer-price">
                    <div className="price-value">
                        <i className="icon-info-coin"></i> от {price} руб
                    </div>
                    <div className="price-discount">
                        <ins></ins>
                    </div>
                </div>
            </div>
        </div>
        <div className="price-card__active">
            <p>Мастер проведет диагностику и устранит неисправность</p>
            <button className="button-default button-default--secondary">
                <span className="button-default__content">Вызвать мастера</span>
            </button>
        </div>
    </div>
);


const PriceList = () => {
    // Данные прайса
    const prices = [
        { title: 'Ремонт замка', price: 1100, description: '', link: '/remont-stiralnyh-mashin/remont-zamka/' },
        { title: 'Замена таходатчика', price: 1200, description: '', link: '/remont-stiralnyh-mashin/zamena-tahodatchika/' },
        { title: 'Ремонт помпы', price: 1200, description: '', link: '/remont-stiralnyh-mashin/remont-pompy/' },
        { title: 'Ремонт таходатчика', price: 1400, description: '', link: '/remont-stiralnyh-mashin/remont-tahodatchika/' }
    ];

    return (
        <section className="prices-service">
            <div className="container">
                <div className="colored" >
                    <h1>Цены</h1>
                </div>
                <div data-price-count="1">
                    <h3 >Низкая сложность <span> от 1 100 ₽</span></h3 >
                    <div className="prices-service__list">
                        {prices.map((item, index) => (
                            <PriceCard
                                key={index}
                                title={item.title}
                                price={item.price}
                                description={item.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PriceList;
