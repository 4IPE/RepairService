import React, { useState } from 'react';
import logo from './image/logo/4712132b-1ee3-42f6-8be3-6716d611273b.png';
import './style/Header.css';

const Header = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <>
            <header>
                <div className="logo-container">
                    <img src={logo} alt="Логотип" className="logo" />
                    <span className="company-name">РемонтЭксперт</span>
                    <a href="tel:+74951747123" className="header-top__phone-number">
                        <span>8 (495) 174-71-23</span>
                        <i className="icon-social-phone"></i>
                    </a>
                </div>
                <button className="openbtn" onClick={toggleSidebar}>☰ Меню</button>
            </header>

            <div className={`sidebar ${sidebarOpen ? 'open' : ''}`}>
                <a href="javascript:void(0)" className="closebtn" onClick={toggleSidebar}>&times;</a>
                <a href="#form">Оставить заявку</a>
                <a href="#about">О нас</a>
                <a href="#testimonials">Отзывы</a>
            </div>
        </>
    );
};

export default Header;
