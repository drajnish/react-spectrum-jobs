import React, { useState } from "react";
import PropTypes from "prop-types";
import { validateInput } from "../../utilities/Validator";
import "../FormStyles.css";

const InputField = ({
  value,
  label,
  inputClass,
  labelClass,
  placeholder,
  validators,
  type,
  onChange,
}) => {
  const [error, setError] = useState(false);

  const handleInputChange = (event) => {
    const { value } = event.target;
    setError(validateInput(validators, value));
    onChange(value);
  };

  return (
    <div>
      <div class="form-info">
        {label && (
          <label htmlFor="app-input-field" className={labelClass}>
            {label}
          </label>
        )}
        <input
          type={type}
          value={value}
          className={inputClass}
          placeholder={placeholder}
          onChange={handleInputChange}
        />
        {error && <span className="error-msg">{error.message}</span>}
      </div>
    </div>
  );
};

InputField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  inputClass: PropTypes.array,
  labelClass: PropTypes.array,
  placeholder: PropTypes.string,
  validators: PropTypes.array,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

InputField.defaultProps = {
  value: "",
  label: "",
  placeholder: "",
  inputClass: [],
  labelClass: [],
  type: "text",
  validators: [],
};

export default InputField;
