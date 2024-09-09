import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import InputMask from 'react-input-mask';
import { Turnstile } from '@marsidev/react-turnstile';
import 'react-datepicker/dist/react-datepicker.css';
import Autosuggest from 'react-autosuggest';
import axios from 'axios';
import './style/FormSection.css';

const FormSection = () => {
    const [startDate, setStartDate] = useState(null);
    const [selectedButton, setSelectedButton] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [userName, setUserName] = useState('');
    const [address, setAddress] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [captchaToken, setCaptchaToken] = useState(null);

    const handleCaptcha = (token) => {
        setCaptchaToken(token);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!captchaToken) {
            alert("Пожалуйста, подтвердите, что вы не робот!");
            return;
        }

        const formData = {
            date: startDate,
            time: selectedTime,
            phone: phoneNumber,
            name: userName,
            address,
        };

        axios.post('ВАШ_API_АДРЕС', formData)
            .then(response => {
                alert('Форма успешно отправлена!');
            })
            .catch(error => {
                alert('Ошибка отправки формы.');
            });
    };

    // Обработка выбора даты
    const handleDateChange = (date) => {
        setStartDate(date);
        setSelectedButton(null); // Сброс кнопок при выборе даты
    };

    // Обработка выбора кнопок "Сегодня" и "Завтра"
    const handleButtonClick = (buttonValue) => {
        setSelectedButton(buttonValue);
        setStartDate(null); // Сброс даты при выборе кнопки
    };

    // Автоподсказки для адреса
    const getSuggestions = (value) => {
        return axios.get(`https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address`, {
            params: {
                query: value,
            },
            headers: {
                "Authorization": "Token ВАШ_DADATA_API_KEY"
            }
        }).then(response => {
            return response.data.suggestions.map(suggestion => suggestion.value);
        });
    };

    const onSuggestionsFetchRequested = ({ value }) => {
        getSuggestions(value).then(suggestions => {
            setSuggestions(suggestions);
        });
    };

    const onSuggestionsClearRequested = () => {
        setSuggestions([]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-container">
                <div className="date-section">
                    <h3 className="section-title">Выберите дату и время</h3>
                    <h4 className="sub-title">Выберите дату</h4>
                    <div className="date-button-group">
                        <button
                            type="button"
                            className={selectedButton === 'Сегодня' ? 'button selected-button' : 'button'}
                            onClick={() => handleButtonClick('Сегодня')}
                        >
                            Сегодня
                        </button>
                        <button
                            type="button"
                            className={selectedButton === 'Завтра' ? 'button selected-button' : 'button'}
                            onClick={() => handleButtonClick('Завтра')}
                        >
                            Завтра
                        </button>
                        <DatePicker
                            selected={startDate}
                            onChange={handleDateChange}
                            placeholderText={startDate ? startDate.toLocaleDateString() : 'Выберите дату 📅'}
                            customInput={<button type="button" className={startDate ? 'button selected-button' : 'button'}>{startDate ? startDate.toLocaleDateString() : 'Выбрать дату 📅'}</button>}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                        />
                    </div>
                    <h4 className="sub-title">Выберите время</h4>
                    <div className="time-button-group">
                        <button
                            type="button"
                            className={selectedTime === '10:00' ? 'button selected-button' : 'button'}
                            onClick={() => setSelectedTime('10:00')}
                        >
                            10:00
                        </button>
                        <button
                            type="button"
                            className={selectedTime === '12:00' ? 'button selected-button' : 'button'}
                            onClick={() => setSelectedTime('12:00')}
                        >
                            12:00
                        </button>
                        <button
                            type="button"
                            className={selectedTime === '14:00' ? 'button selected-button' : 'button'}
                            onClick={() => setSelectedTime('14:00')}
                        >
                            14:00
                        </button>
                        <button
                            type="button"
                            className={selectedTime === '16:00' ? 'button selected-button' : 'button'}
                            onClick={() => setSelectedTime('16:00')}
                        >
                            16:00
                        </button>
                    </div>
                </div>
                <div className="contact-section">
                    <h3 className="section-title">Контактная информация</h3>
                    <InputMask mask="+7 (999) 999-99-99" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Телефон*" required>
                        {(inputProps) => <input {...inputProps} className="input" />}
                    </InputMask>
                    <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Имя*" required className="input" />
                    <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        getSuggestionValue={(suggestion) => suggestion}
                        renderSuggestion={(suggestion) => <div>{suggestion}</div>}
                        inputProps={{
                            placeholder: 'Город, улица, дом',
                            value: address,
                            onChange: (e, { newValue }) => setAddress(newValue),
                            className: 'input' // добавляем класс input, чтобы поле адреса было таким же как остальные
                        }}
                    />
                    <Turnstile
                        siteKey="ВАШ_CLOUDFLARE_SITE_KEY"
                        onVerify={handleCaptcha}
                    />
                    <button type="submit" className="submit-button">Отправить</button>
                </div>
            </div>
        </form>
    );
};

export default FormSection;
