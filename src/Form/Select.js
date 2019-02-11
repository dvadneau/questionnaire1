import React from 'react';
import FormControlLabel from './FormControlLabel';
import FormControlError from './FormControlError';
import css from './styles.module.scss';

const Select = (props) => {
  const { name, data, formProps } = props;
  const { options } = data;
  const { isSubmitting, handleChange, handleBlur } = formProps;
  return (
    <div className={css.select}>
      <FormControlLabel {...props} />
      {options.map((option, i) => (
        <label key={`${name}_${i}`}>
          <input
            type="radio"
            name={name}
            value={option}
            disabled={isSubmitting}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {option}
        </label>
      ))}
      <FormControlError name={name} formProps={formProps}/>
    </div>
  );
};

export default Select;
