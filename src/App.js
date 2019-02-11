import React, { Component } from 'react';
import css from './App.module.scss';
import data from 'data.json';
import Form from 'Form';

class App extends Component {

  onSubmit = (values) => {
    const formattedValues = JSON.stringify(values, null, 2);
    alert(`Call API/GraphQL/etc here.\n\nValues: ${formattedValues}`);
  };

  render() {
    return (
      <div className={css.app}>
        <header className={css.appHeader}>
          <h1>Questionnaire</h1>
        </header>
        <main>
          <Form
            questions={data.questions}
            submitHandler={this.onSubmit}
          />
        </main>
      </div>
    );
  }
}

export default App;
