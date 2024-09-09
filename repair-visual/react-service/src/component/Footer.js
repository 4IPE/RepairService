import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.logoSection}>
                    <img
                        src="URL_ВАШЕГО_ЛОГО"
                        alt="Лого"
                        style={styles.logo}
                    />
                    <h2 style={styles.companyName}>ИП РемтехСервис</h2>
                </div>
                <div style={styles.info}>
                    <p style={styles.text}>
                        Вся информация на сайте является ознакомительной.
                    </p>
                    <img
                        src="URL_ВТОРОГО_ЛОГО"
                        alt="Второе Лого"
                        style={styles.secondLogo}
                    />
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#0a2f75', // Цвет совпадает с шапкой
        padding: '20px 0',
        color: '#fff',
        textAlign: 'center',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    logoSection: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        width: '60px',
        marginRight: '15px',
    },
    companyName: {
        margin: 0,
        fontSize: '1.5rem',
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    text: {
        fontSize: '0.75rem', // Маленький шрифт для текста
        marginBottom: '10px',
    },
    secondLogo: {
        width: '50px',
    }
};

export default Footer;
