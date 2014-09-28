/** @jsx React.DOM */

var React = require('React');
var EmployeeRow = require('./employee.row');

var EmployeeTable = React.createClass({

  render: function () {

    var employeeRows = this.props.employees.map(function (employee) {
      return (
        <EmployeeRow employee={employee} key={employee._id} />
      );
    });

    return (
      <table className="table table-bordered table-hover tsz-table-row-cursor">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Admin</th>
            <th className="tsz-table-delete-column">Delete</th>
          </tr>
        </thead>
        <tbody>
          {employeeRows}
        </tbody>
      </table>
    );
  }
}); 

module.exports = EmployeeTable;
