import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    tasks: [],
  };

  handleSubmit = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  deleteTickedTasks = (index) => {
    const { tasks } = this.state;
    console.log(tasks);
    this.setState({
      tasks: tasks.filter((task) => !task.checked),
    });
  };

  handleCheck = (isChecked, index) => {
    console.log(isChecked);
    console.log(typeof index);
    this.setState({
      tasks: this.state.tasks.map((task, i) => {
        if (i === index) {
          task.checked = isChecked;
        }
        return task;
      }),
    });
  };

  render() {
    const { tasks } = this.state;
    return (
      <div>
        <h1>To Do List</h1>
        <Form handleSubmit={this.handleSubmit} />
        <Table
          taskData={tasks}
          deleteTickedTasks={this.deleteTickedTasks}
          handleCheck={this.handleCheck}
        />
      </div>
    );
  }
}

export default App;
