import React from 'react';
import logo from './image/logo/4712132b-1ee3-42f6-8be3-6716d611273b.png';
import './style/Header.css'

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Логотип" className="logo"/>
                <span className="company-name">РемТехСервис</span> {/* Текст с названием компании */}
                <a href="tel:+74951747123" title="8 (495) 174-71-23" className="header-top__phone-number">
                    <span>8 (495) 174-71-23</span>
                    <i className="icon-social-phone"></i>
                </a>
            </div>
            <nav>
                <ul>
                    <li><a href="#form">Оставить заявку</a></li>
                    <li><a href="#about">О нас</a></li>
                    <li><a href="#pricelist">Услуги и цены</a></li>
                    <li><a href="#testimonials">Отзывы</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
