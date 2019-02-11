import React from 'react';
import FormControlError from './FormControlError';
import css from './styles.module.scss';

const Check = ({ name, data, formProps }) => {
  const { label, moreInfo, required } = data;
  const { isSubmitting, handleChange, handleBlur } = formProps;
  return (
    <div className={css.check}>
      <label>
        <input
          type="checkbox"
          name={name}
          disabled={isSubmitting}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {label} {required && <span className={css.required}/>}
        {moreInfo && <div className={css.moreInfo}>{moreInfo}</div>}
      </label>
      <FormControlError name={name} formProps={formProps}/>
    </div>
  );
};

export default Check;
