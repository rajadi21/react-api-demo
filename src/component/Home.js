import React, { Component } from 'react'

export default class Home extends Component {
  state = { employeesData: [], selectedId: 0, employeeData: [] }

  componentDidMount() {
    fetch('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(d => this.setState({ employeesData: d.data }))
      .catch(error => console.log(error));
  }

  loadEmployee = () => {
    return (this.state.employeesData.map(emp =>
      <option key={emp.id} value={emp.id}>
        {emp.employee_name}
      </option>)
    )
  }

  onEmployeeSelect = (e) => {
    //to update state on Employee select
  }

  render() {

    if (this.state.employeesData.length === 0) {
      return <div>Loading.....</div>
    } else {
      return <div>
        <select onChange={this.onEmployeeSelect}>
          <option value="select">Select</option>
          {this.loadEmployee()}
        </select>
      </div>
    }
  }
}
