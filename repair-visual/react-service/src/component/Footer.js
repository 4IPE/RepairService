import React from 'react';

const Footer = () => {
    const handleReviewClick = () => {
        window.location.href = 'https://www.avito.ru/brands/324896b9571238055aebdd9d01324073/all?gdlkerfdnwq=101&page_from=from_item_card&iid=4271924479&sellerId=97dfd45869fdea2dc9ee4b1dbc2eab06'; // Замена на вашу ссылку для отзыва
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.thankYouSection}>
                <h1 style={styles.thankYouText}>Спасибо, что выбираете нас!</h1>
                <h2 style={styles.thankYouText}>
                    Пожалуйста, оставьте отзыв — мы хотим становиться лучше для вас!
                </h2>
                <a  href="https://www.avito.ru/brands/324896b9571238055aebdd9d01324073/all?gdlkerfdnwq=101&page_from=from_item_card&iid=4271924479&sellerId=97dfd45869fdea2dc9ee4b1dbc2eab06" target="_blank" rel="noopener noreferrer">
                    <button style={styles.reviewButton} >Оставить отзыв</button>
                </a>
            </div>
            <div style={styles.container}>
                <div style={styles.logoSection}>
                    <h4 style={styles.companyName}>© 2024 РемБытТех. Все права защищены.</h4>
                </div>
                <div style={styles.info}>
                    <p style={styles.text}>
                        Вся информация на сайте является ознакомительной.
                    </p>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#0a2f75',
        padding: '40px 20px',
        color: '#fff',
        textAlign: 'center',
    },
    thankYouSection: {
        marginBottom: '30px',
        padding: '20px',
        backgroundColor: '#fff',
        color: '#0a2f75',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    thankYouText: {
        margin: '10px 0',
        fontSize: '1.5rem',
    },
    reviewButton: {
        backgroundColor: '#05f',
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '1rem',
        transition: 'background-color 0.3s ease',
    },
    reviewButtonHover: {
        backgroundColor: '#004080',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    companyName: {
        margin: 0,
        fontSize: '1rem',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontSize: '0.75rem',
        marginBottom: '10px',
    }
};

export default Footer;
