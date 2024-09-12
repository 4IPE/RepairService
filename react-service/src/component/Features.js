import React from 'react';
import './style/Features.css';

const features = [
    {
        title: "Ответственность за качество",
        description: "Мастера работают так, будто ремонтируют свою личную стиральную машину.",
        icon: "👍"
    },
    {
        title: "Честность",
        description: "Мы не выжимаем из клиентов деньги и не навязываем ненужные услуги. Почему? Мы заработаем значительно больше, если вы останетесь довольны и порекомендуете нас своим близким.",
        icon: "✔️"
    },
    {
        title: "Профессионализм",
        description: "Средний опыт мастера 7 лет и 3000+ успешных ремонтов стиральных машин.",
        icon: "⭐"
    },
    {
        title: "Скорость",
        description: "Минимум 5 специалистов на дежурстве ежедневно. Срочный приезд от 1 часа.",
        icon: "⏱️"
    },
    {
        title: "Вежливость и доброжелательность",
        description: "Это норма. Специалист приезжает в ваш дом и вести себя по-другому он просто не может.",
        icon: "❤️"
    },
    {
        title: "Доступность",
        description: "Большинство заказов мы получаем по рекомендациям. Нам нет нужды вкладывать миллионы в рекламу и пиар. Благодаря низким расходам, мы держим цены ниже рыночных.",
        icon: "💸"
    }
];

const Features = () => {
    const scrollToForm = () => {
        const formElement = document.getElementById('form');
        formElement.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="features-container">
            <h2>Почему 3000+ клиентов в этом году доверили ремонт нам?</h2>
            <div className="features-grid">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <div className="feature-icon">{feature.icon}</div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
