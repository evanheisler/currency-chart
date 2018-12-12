import React from "react";
import PropTypes from "prop-types";

const CurrencySelect = ({ options, change }) => {
  return (
    <select
      className="bg-white"
      defaultValue="Select"
      onChange={e => change(e.target.value)}
    >
      <option value="Select" disabled>
        Select…
      </option>

      {options.length > 0 && <option value="EUR">EUR</option>}
      {options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

CurrencySelect.propTypes = {
  options: PropTypes.array.isRequired
};

export default CurrencySelect;
