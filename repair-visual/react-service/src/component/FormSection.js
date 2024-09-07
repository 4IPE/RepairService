import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import InputMask from 'react-input-mask';
import { Turnstile } from '@marsidev/react-turnstile';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const FormContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 10px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 1200px;
    margin: 20px auto;
`;

const DateSection = styled.div`
    flex: 1;
    margin-right: 40px;
`;

const ContactSection = styled.div`
    flex: 1;
`;

const SectionTitle = styled.h3`
    color: #333;
    margin-bottom: 10px;
`;

const SubTitle = styled.h4`
    color: #555;
    margin-bottom: 15px;
    margin-top: 20px;
`;

const TransparentButton = styled.button`
    padding: 10px 20px;
    background-color: transparent;
    border: 2px solid #000;
    border-radius: 5px;
    color: #000;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
        background-color: #f0f0f0;
    }
`;

const DateButtonGroup = styled.div`
    display: flex;
    gap: 20px;
    margin-bottom: 30px;
`;

const TimeButtonGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const Input = styled.input`
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
`;

const SubmitButton = styled(TransparentButton)`
    width: 100%;
    background-color: #fa0;
    border: none;
    color: white;

    &:hover {
        background-color: #ffca0a;
    }
`;

const FormSection = () => {
    const [startDate, setStartDate] = useState(null);
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
        alert("Форма успешно отправлена!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <FormContainer>
                <DateSection>
                    <SectionTitle>Выберите дату и время</SectionTitle>
                    <SubTitle>Выберите дату</SubTitle>
                    <DateButtonGroup>
                        <TransparentButton>Сегодня</TransparentButton>
                        <TransparentButton>Завтра</TransparentButton>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            placeholderText="Выберите дату"
                            customInput={<TransparentButton>Выбрать дату 📅</TransparentButton>}
                            dateFormat="dd/MM/yyyy"
                            minDate={new Date()}
                            popperPlacement="bottom-end"
                        />
                    </DateButtonGroup>
                    <SubTitle>Выберите время</SubTitle>
                    <TimeButtonGroup>
                        <TransparentButton>10:00</TransparentButton>
                        <TransparentButton>12:00</TransparentButton>
                        <TransparentButton>14:00</TransparentButton>
                        <TransparentButton>16:00</TransparentButton>
                    </TimeButtonGroup>
                </DateSection>
                <ContactSection>
                    <SectionTitle>Контактная информация</SectionTitle>
                    <InputMask mask="+7 (999) 999-99-99" placeholder="Телефон*" required>
                        {(inputProps) => <Input {...inputProps} />}
                    </InputMask>
                    <Input type="text" placeholder="Имя*" required />
                    <Input type="text" placeholder="Город, улица, дом" required />
                    <Turnstile
                        siteKey="ВАШ_CLOUDFLARE_SITE_KEY"
                        onVerify={handleCaptcha}
                    />
                    <SubmitButton type="submit">Отправить</SubmitButton>
                </ContactSection>
            </FormContainer>
        </form>
    );
};

export default FormSection;
