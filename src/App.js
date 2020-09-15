import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import Connect from "./Connect";

class App extends Component {
  state = {
    users: [
      {
        id: 0,
        username: "David",
        pwd: "1234",
        tasks: ["Faire les courses", "Nettoyer la voiture"],
      },
      {
        id: 1,
        username: "Julien",
        pwd: "0000",
        tasks: ["Ranger le garage", "Appeler mamie"],
      },
    ],
    connectedUser: {},
  };

  //new task
  handleSubmitTask = (task) => {
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  //fill connectedUser with user
  handleSubmitConnect = (userName, passWord) => {
    this.setState({
      connectedUser: this.state.users.find(
        (person) => person.username === userName && person.pwd === passWord
      ),
    });
  };

  //delete task selected
  deleteTickedTasks = () => {
    const { tasks } = this.state;
    console.log(tasks);
    this.setState({
      tasks: tasks.filter((task) => !task.checked),
    });
  };

  //changing status of checked whe checbox is checked
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
    console.log(this.state.connectedUser);
    return (
      <div>
        <h1>To Do List</h1>
        {this.state.connectedUser.id ? (
          <div>
            <Form handleSubmitTask={this.handleSubmitTask} />
            <Table
              taskData={this.state.connectedUser.tasks}
              deleteTickedTasks={this.deleteTickedTasks}
              handleCheck={this.handleCheck}
            />
          </div>
        ) : (
          <Connect handleSubmitConnect={this.handleSubmitConnect} />
        )}
      </div>
    );
  }
}

export default App;
