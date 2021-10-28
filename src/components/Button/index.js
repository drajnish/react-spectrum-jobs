import React from "react";
import PropTypes from "prop-types";

import "./buttonStyles.css";

const Button = ({ value, onClick, buttonclass }) => (
  <button className="app-button" onClick={(event) => onClick(event)}>
    {value}
  </button>
);

Button.propTypes = {
  styleClass: PropTypes.string,
  buttonclass: PropTypes.string,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  styleClass: "btn-primary",
};

export default Button;
