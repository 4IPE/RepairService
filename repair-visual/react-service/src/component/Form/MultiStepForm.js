import React, { useState } from 'react';
import axios from 'axios';
import Step1 from './Step1.js';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';

const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        problem: '',
        otherProblem: '',
        model: '',
        years: '',
        repairDate: '',
        name: '',
        phone: '',
        step1Valid: false,
        step2Valid: false,
        step3Valid: false,
        step4Valid: false,
    });

    const handleNext = () => {
        if (step < 5) {
            setStep(step + 1);
        }
    };

    const handleBack = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post('/api/repair/request', formData);
            alert("Запрос на ремонт успешно отправлен!");
        } catch (error) {
            alert("Ошибка при отправке запроса на ремонт.");
        }
    };

    return (
        <div className="form-container">
            {step === 1 && <Step1 formData={formData} handleChange={handleChange} />}
            {step === 2 && <Step2 formData={formData} handleChange={handleChange} />}
            {step === 3 && <Step3 formData={formData} handleChange={handleChange} />}
            {step === 4 && <Step4 formData={formData} handleChange={handleChange} />}
            {step === 5 && <Step5 formData={formData} handleChange={handleChange} />}

            <div className="navigation-buttons">
                {step > 1 && <button onClick={handleBack}>Назад</button>}
                {step < 5 && <button onClick={handleNext} disabled={!formData[`step${step}Valid`]}>Далее</button>}
                {step === 5 && <button disabled={!formData.name || !formData.phone} onClick={handleSubmit}>Отправить</button>}
            </div>
        </div>
    );
}

export default MultiStepForm;
