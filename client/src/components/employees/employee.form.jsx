var React = require('react/addons');
var Router = require('react-router');
var PropTypes = React.PropTypes;

var FieldWrap = require('../common/field.wrap');
var TextInput = require('../common/text.input');
var SaveButton = require('../common/save.button');
var CancelButton = require('../common/cancel.button');
var yesNo = require('../../util/boolean');

var EmployeeForm = React.createClass({

  mixins: [
    Router.Navigation
  ],

  onCancel: function (event) {
    event.preventDefault();
    this.transitionTo('employees');
  },

  render : function () {
    return (
      <div className="ui ten column centered grid">
        <div className="ten wide column">
          <form className="ui inline form" name="employeeForm" onSubmit={this.props.onSave}>

            <FieldWrap inputId="username" label="Username"
              error={this.props.errors.username}
              formField={
                <TextInput name="username" placeholder="Employee Username"
                  value={this.props.employee.username}
                  error={this.props.errors.username}
                  onChange={this.props.validate} />
             }/>

            <FieldWrap inputId="email" label="Email"
              error={this.props.errors.email}
              formField={
                <TextInput name="email" placeholder="Employee Email"
                  value={this.props.employee.email}
                  error={this.props.errors.email}
                  onChange={this.props.validate} />
            }/>

            <FieldWrap inputId="firstName" label="First Name"
              error={this.props.errors.firstName}
              formField={
                <TextInput name="firstName" placeholder="First Name"
                  value={this.props.employee.firstName}
                  error={this.props.errors.firstName}
                  onChange={this.props.validate} />
            }/>

            <FieldWrap inputId="lastName" label="Last Name"
              error={this.props.errors.lastName}
              formField={
                <TextInput name="lastName" placeholder="Last Name"
                  value={this.props.employee.lastName}
                  error={this.props.errors.lastName}
                  onChange={this.props.validate} />
            }/>

            <FieldWrap inputId="admin" label="Admin" formField={
              <div className="ui toggle checkbox" onClick={this.props.toggleAdmin}>
                <input type="checkbox" name="admin"
                  checked={this.props.employee.admin}
                  onChange={this.props.validate} />
                <label htmlFor="admin">{yesNo(this.props.employee.admin)}</label>
              </div>
            }/>

            <div className="ui horizontal divider"></div>

            <div className="ui sixteen column right floated grid">
              <SaveButton hasErrors={this.props.hasErrors()} saveText={this.props.saveText} />
              <CancelButton onCancel={this.onCancel} />
            </div>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = EmployeeForm;
