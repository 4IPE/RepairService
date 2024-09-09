import React from 'react';
import './style/Advantages.css';

const Advantages = () => {
    const advantages = [
        { number: 1, title: "Низкие цены", description: "Ремонт от 400 рублей. Мои цены ниже, чем в сервисном центре, т.к. мне не нужно платить зарплату сотрудникам и за аренду офиса" },
        { number: 2, title: "Лучшие запчасти", description: "Закупаю качественные детали напрямую у проверенных поставщиков. Вы платите только их реальную стоимость" },
        { number: 3, title: "Срочный выезд", description: "Выезжаю за 20-30 минут, чтобы произвести ремонт бытовой техники как можно быстрее. Большинство поломок я устраняю на дому в течение часа" },
        { number: 4, title: "Любая сложность", description: "Выполняю ремонт любой сложности максимально быстро. Я всегда соблюдаю технологию и регламенты ремонта, что обеспечивает высокое качество" },
        { number: 5, title: "Диагностика 0 руб", description: "Начинаю ремонт только после точной инструментальной диагностики. Если цена Вас не устроит - платить не нужно" },
        { number: 6, title: "Гарантия до 3 лет", description: "Я предоставляю до 3 лет гарантии на свои услуги, но, как показывает практика, отремонтированная мной техника работает гораздо дольше" },
    ];

    return (
        <section className="s-advantages-type-5">
            <div className="sb-container sb-m-clear-bottom">
                <div className="sb-row sb-m-3-bottom sb-m-clear-bottom">
                    <h3 className="sb-col_lg-8 sb-col-offset_lg-2 sb-col_md-12 sb-col_sm-12 sb-col_xs-12 sb-align-center sb-font-h3 sb-m-14-bottom">
                        Почему выгодно обратиться ко мне, а не в сервис?
                    </h3>
                </div>
                <h3 className="sb-col_lg-8 sb-col-offset_lg-2 sb-col_md-12 sb-col_sm-12 sb-col_xs-12 sb-align-center sb-font-p1">
                    Нет посредников - нет переплат!
                </h3>
                <div className="sb-row-square">
                    {advantages.map((advantage) => (
                        <div key={advantage.number} className="s-advantages-type-5__col">
                            <div className="s-advantages-type-5__item">
                                <div className="s-advantages-type-5__number-wrapper">
                                    <div className="sb-background_clear">
                                        <div className="s-advantages-type-5__number">{advantage.number}</div>
                                    </div>
                                </div>
                                <div className="s-advantages-type-5__content">
                                    <h5 className="sb-align-left sb-font-h5 sb-m-21-bottom">
                                        <b>{advantage.title}</b>
                                    </h5>
                                    <div className="sb-text-opacity sb-font-p3">
                                        {advantage.description}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Advantages;
