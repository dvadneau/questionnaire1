import React from 'react';
import FormControlLabel from './FormControlLabel';
import FormControlError from './FormControlError';
import css from './styles.module.scss';

const TextArea = (props) => {
  const { name, formProps } = props;
  const { isSubmitting, handleChange, handleBlur } = formProps;
  return (
    <div className={css.textArea}>
      <FormControlLabel {...props} />
      <textarea
        name={name}
        disabled={isSubmitting}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FormControlError name={name} formProps={formProps}/>
    </div>
  );
};

export default TextArea;
