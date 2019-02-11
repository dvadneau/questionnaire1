import React from 'react';
import FormControlLabel from './FormControlLabel';
import FormControlError from './FormControlError';
import css from './styles.module.scss';

/*
Currently this will only return one value.

TODO: Create an fields array handler to properly return all of the selected
 values as an array or delimited string.
 */
const Multiple = (props) => {
  const { name, data, formProps } = props;
  const { options } = data;
  const { isSubmitting, handleChange, handleBlur } = formProps;
  return (
    <div className={css.multiple}>
      <FormControlLabel {...props} />
      <select
        name={name}
        disabled={isSubmitting}
        onChange={handleChange}
        onBlur={handleBlur}
        multiple={true}
      >
        {options.map((option, i) => (
          <option key={`${name}_${i}`}>
            {option}
          </option>
        ))}
      </select>
      <FormControlError name={name} formProps={formProps}/>
    </div>
  );
};

export default Multiple;
