import React from 'react';
import css from './styles.module.scss';

const FormControlLabel = ({ name, data }) => {
  const { label, moreInfo, required } = data;
  return (
    <div className={css.formControlLabel}>
      <label htmlFor={name}>
        {label} {required && <span className={css.required}/>}
      </label>
        {moreInfo && <div className={css.moreInfo}>{moreInfo}</div>}
    </div>
  );
};

export default FormControlLabel;
