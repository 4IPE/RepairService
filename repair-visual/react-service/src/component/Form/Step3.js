import React, { useEffect } from 'react';

const Step3 = ({ formData, handleChange }) => {
    useEffect(() => {
        handleChange('step3Valid', !!formData.years);
    }, [formData.years]);

    const handleYearsChange = (e) => {
        const value = e.target.value;
        handleChange('years', value);
    };

    return (
        <div>
            <h3>Этап 3: Сколько лет машине?</h3>
            <div className="check-option-container">
                <div className="check-option">
                    <input type="checkbox" value="Менее 2 лет" checked={formData.years === 'Менее 2 лет'}
                           onChange={handleYearsChange}/>
                    <label>Менее 2 лет</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" value="До 2 лет" checked={formData.years === 'До 2 лет'}
                           onChange={handleYearsChange}/>
                    <label>До 2 лет</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" value="До 5 лет" checked={formData.years === 'До 5 лет'}
                           onChange={handleYearsChange}/>
                    <label>До 5 лет</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" value="До 10 лет" checked={formData.years === 'До 10 лет'}
                           onChange={handleYearsChange}/>
                    <label>До 10 лет</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" value="Более 10 лет" checked={formData.years === 'Более 10 лет'}
                           onChange={handleYearsChange}/>
                    <label>Более 10 лет</label>
                </div>
            </div>
        </div>
    );
}

export default Step3;
