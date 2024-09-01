import React, { useEffect } from 'react';

const Step4 = ({ formData, handleChange }) => {
    useEffect(() => {
        handleChange('step4Valid', !!formData.repairDate);
    }, [formData.repairDate]);

    return (
        <div>
            <h3>Этап 4: Когда нужен ремонт?</h3>
            <input
                type="date"
                value={formData.repairDate}
                onChange={(e) => handleChange('repairDate', e.target.value)}
            />
        </div>
    );
}

export default Step4;
