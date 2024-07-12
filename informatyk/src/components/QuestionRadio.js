import React from 'react';
import '../styles/QuestionRadio.css'; // Import the CSS file

const QuestionRadio = ({ name, value, checked, onChange, label }) => {
  return (
    <label className="QuestionCardCheckbox">
      {label}
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="QuestionCardCheckboxInput"
      />
      <span className="QuestionCardCheckboxCheckmark"></span>
    </label>
  );
};

export default QuestionRadio;