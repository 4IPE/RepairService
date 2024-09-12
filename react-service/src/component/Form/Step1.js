import React, { useState, useEffect } from 'react';

const Step1 = ({ formData, handleChange }) => {
    const [otherVisible, setOtherVisible] = useState(false);

    useEffect(() => {
        const isStep1Valid = formData.problem.length > 0 && (!otherVisible || !!formData.otherProblem);
        handleChange('step1Valid', isStep1Valid);
    }, [formData.problem, formData.otherProblem, otherVisible, handleChange]);

    const handleProblemChange = (e) => {
        const value = e.target.value;
        const checked = e.target.checked;

        let updatedProblems;
        if (checked) {
            updatedProblems = [...formData.problem, value];
        } else {
            updatedProblems = formData.problem.filter(problem => problem !== value);
        }

        handleChange('problem', updatedProblems);

        if (value === 'Другое') {
            setOtherVisible(checked);
        } else if (!checked && formData.problem.includes('Другое')) {
            setOtherVisible(false);
            handleChange('otherProblem', '');
        }
    };

    return (
        <div>
            <h3>Этап 1: Укажите поломку</h3>
            <div className="check-option-container">
                <div className="check-option">
                    <input type="checkbox" value="Не включается"
                           checked={formData.problem.includes('Не включается')}
                           onChange={handleProblemChange}/>
                    <label>Не включается</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" value="Протекает вода"
                           checked={formData.problem.includes('Протекает вода')}
                           onChange={handleProblemChange}/>
                    <label>Протекает вода</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" value="Не отжимает"
                           checked={formData.problem.includes('Не отжимает')}
                           onChange={handleProblemChange}/>
                    <label>Не отжимает</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" value="Не открывается барабан"
                           checked={formData.problem.includes('Не открывается барабан')}
                           onChange={handleProblemChange}/>
                    <label>Не открывается барабан</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" value="Не сливает"
                           checked={formData.problem.includes('Не сливает')}
                           onChange={handleProblemChange}/>
                    <label>Не сливает</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" value="Не греет воду"
                           checked={formData.problem.includes('Не греет воду')}
                           onChange={handleProblemChange}/>
                    <label>Не греет воду</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" value="Не набирает воду"
                           checked={formData.problem.includes('Не набирает воду')}
                           onChange={handleProblemChange}/>
                    <label>Не набирает воду</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" value="Шумит/прыгает"
                           checked={formData.problem.includes('Шумит/прыгает')}
                           onChange={handleProblemChange}/>
                    <label>Шумит/прыгает</label>
                </div>
                <div className="check-option">
                    <input type="checkbox" value="Другое"
                           checked={formData.problem.includes('Другое')}
                           onChange={handleProblemChange}/>
                    <label>Другое</label>
                    {otherVisible && (
                        <input
                            type="text"
                            placeholder="Опишите проблему"
                            value={formData.otherProblem}
                            onChange={(e) => handleChange('otherProblem', e.target.value)}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Step1;
