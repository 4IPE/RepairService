import React from 'react';
import logo from './image/logo/4712132b-1ee3-42f6-8be3-6716d611273b.png'; // Добавьте ваш логотип

const Header = () => {
    return (
        <header>
            <div className="logo-container">
                <img src={logo} alt="Логотип" />
            </div>
            <nav>
                <ul>
                    <li><a href="#form">Форма заявки</a></li>
                    <li><a href="#about">Обо мне</a></li>
                    <li><a href="#services">Услуги и цены</a></li>
                    <li><a href="#contact">Контакты</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
