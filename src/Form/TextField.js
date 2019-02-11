import React from 'react';
import FormControlLabel from './FormControlLabel';
import FormControlError from './FormControlError';
import css from './styles.module.scss';

const TextField = (props) => {
  const { name, data, formProps } = props;
  const { dataType } = data;
  const { isSubmitting, handleChange, handleBlur } = formProps;
  return (
    <div className={css.textField}>
      <FormControlLabel {...props} />
      <input
        name={name}
        type={dataType || 'text'}
        disabled={isSubmitting}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormControlError name={name} formProps={formProps}/>
    </div>
  );
};

export default TextField;
