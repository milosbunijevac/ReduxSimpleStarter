import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class PostsNew extends Component {
  constructor(props){
    super(props);
  }

  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
      </div>
    )
  }

  renderTagsField() {

  }

  render() {
    return(
      <div>
        <form>
          <Field
            label="Title for Post"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Post Content"
            name="content"
            component={this.renderField}
          />
        </form>
      </div>
    )
  }
}

function validate(values) {
  //console.log(values) -> {title:'asdf', categories: 'asdf', content: 'asdf}
  const errors = {};

  //Validate the inputs from 'values'
  if (!values.title) {
    errors.title = "Enter a title!";
  }

  if(!values.categories) {
    errors.categories = "Enter some categories";
  }

  if(!values.content) {
    errors.content = "Enter some content please";
  }

  //If errors is empty the form is fine to submit.
  return errors;
}

export default reduxForm({
  validate: validate,
  form: 'PostsNewForm'
})(PostsNew);