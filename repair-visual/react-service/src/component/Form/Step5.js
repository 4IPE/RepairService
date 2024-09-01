import React, { useEffect } from 'react';

const Step5 = ({ formData, handleChange }) => {
    useEffect(() => {
        handleChange('step5Valid', !!formData.name && !!formData.phone);
    }, [formData.name, formData.phone]);

    return (
        <div>
            <h3>Этап 5: Введите ваши контакты</h3>
            <input
                type="text"
                placeholder="Имя"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
            />
            <input
                type="tel"
                placeholder="Номер телефона"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
            />
        </div>
    );
}

export default Step5;
