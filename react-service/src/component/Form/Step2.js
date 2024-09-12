import React, { useEffect } from 'react';

const Step2 = ({ formData, handleChange }) => {
    useEffect(() => {
        handleChange('step2Valid', !!formData.model);
    }, [formData.model]);

    return (
        <div>
            <h3>Этап 2: Укажите модель стиральной машины</h3>
            <input
                type="text"
                placeholder="Модель машины"
                value={formData.model}
                onChange={(e) => handleChange('model', e.target.value)}
            />
        </div>
    );
}

export default Step2;
