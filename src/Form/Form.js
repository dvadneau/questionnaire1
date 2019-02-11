import React from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import css from './styles.module.scss';
import Check from './Check';
import Multiple from './Multiple';
import Select from './Select';
import TextArea from './TextArea';
import TextField from './TextField';

const {
  string,
  arrayOf,
  bool,
  number,
  shape,
  oneOfType,
  oneOf,
  func,
} = PropTypes;

export const TYPES = {
  SELECT: 'select',
  TEXT: 'text',
  MULTILINE_TEXT: 'multiline_text',
  CHECK: 'check',
  MULTIPLE: 'multiple',
};

export const DATA_TYPES = {
  TEXT: 'text',
  BOOLEAN: 'boolean',
};

class QuestionnaireForm extends React.Component {

  static propTypes = {
    questions: arrayOf(shape({
      id: oneOfType([string, number]),
      label: string,
      moreInfo: string,
      type: oneOf(Object.values(TYPES)),
      dataType: oneOf(Object.values(DATA_TYPES)),
      options: arrayOf(string),
      defaultValue: oneOfType([string, bool]),
      required: bool,
    })),
    submitHandler: func,
  };

  initialValues;

  constructor (props) {
    super(props);
    this.initialValues = this.mapInitialValues(props.questions);
  }

  // Assign initial values
  mapInitialValues = (arr) => {
    const values = {};
    arr.forEach(
      (q) => values[this.getQuestionName(q.id)] = q.defaultValue || ''
    );
    return values;
  };

  validate = (values) => {
    const errors = {};
    this.props.questions.forEach((q) => {
      if (!q.required) return;
      const name = this.getQuestionName(q.id);
      if (!values[name]) errors[name] = 'Required';
    });
    return errors;
  };

  onSubmit = (values, actions) => {
    const { setSubmitting } = actions;
    if (typeof this.props.submitHandler === 'function') {
      this.props.submitHandler(values);
    }
    setSubmitting(false);
  };

  buildQuestions = (questions, formProps) => {
    const {
      CHECK,
      MULTILINE_TEXT,
      MULTIPLE,
      SELECT,
    } = TYPES;
    return (
      <div className={css.questionGroup}>
        {questions.map((question) => {
          const name = this.getQuestionName(question.id);
          let Control;
          switch (question.type) {
            case SELECT:
              Control = Select;
              break;
            case MULTIPLE:
              Control = Multiple;
              break;
            case CHECK:
              Control = Check;
              break;
            case MULTILINE_TEXT:
              Control = TextArea;
              break;
            default:
              Control = TextField;
          }
          return (
            <Control
              name={name}
              data={question}
              formProps={formProps}
              key={name}
            />
          );
        })}
      </div>
    );
  };

  getQuestionName = (id) => `question_${id}`;

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        validate={this.validate}
        onSubmit={this.onSubmit}
        render={(formProps) => {
          const { handleSubmit, isValid } = formProps;
          return (
            <form onSubmit={handleSubmit}>
              {this.buildQuestions(this.props.questions, formProps)}
              <div className={css.buttonRow}>
                <button type="submit" disabled={!isValid}>
                  Submit
                </button>
              </div>
            </form>
          );
        }}
      />
    );
  }
}

export default QuestionnaireForm;
