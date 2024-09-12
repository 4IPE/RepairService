import React from 'react';
import './style/Footer.css';

const Footer = () => {
    const handleReviewClick = () => {
        window.location.href = 'https://www.avito.ru/brands/324896b9571238055aebdd9d01324073/all?gdlkerfdnwq=101&page_from=from_item_card&iid=4271924479&sellerId=97dfd45869fdea2dc9ee4b1dbc2eab06'; // Замена на вашу ссылку для отзыва
    };

    return (
        <footer className="footer">
            <div className="thank-you-section">
                <h1 className="thank-you-text">Спасибо, что выбираете нас!</h1>
                <h2 className="thank-you-sub-text">
                    Пожалуйста, оставьте отзыв — мы хотим становиться лучше для вас!
                </h2>
                <button className="review-button" onClick={handleReviewClick}>
                    Оставить отзыв
                </button>
            </div>
            <div className="container">
                <div className="logo-section">
                    <h4 className="company-name">© 2015 РемонтЭксперт. Все права защищены.</h4>
                </div>
                <div className="info">
                    <p className="text">
                        Вся информация на сайте является ознакомительной.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
