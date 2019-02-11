import React from 'react';
import css from './styles.module.scss';

const FormControlError = ({ name, formProps: { errors, touched }}) => (
  errors[name] && touched[name]
    ? <div className={css.formControlError}>{errors[name]}</div>
    : null
);

export default FormControlError;
