import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import Connect from "./Connect";
import Login from "./Login";

class App extends Component {
  state = {
    users: [
      {
        id: 0,
        username: "David",
        pwd: "1234",
        tasks: [],
      },
      {
        id: 1,
        username: "Julien",
        pwd: "0000",
        tasks: [],
      },
    ],
    connectedUser: {},
  };

  //new task
  handleSubmitTask = (task) => {
    this.setState({
      connectedUser: {
        ...this.state.connectedUser,
        tasks: [...this.state.connectedUser.tasks, task],
      },
    });
  };

  //fill connectedUser with user and login
  handleSubmitConnect = (userName, passWord) => {
    let userFound = this.state.users.find((user) => {
      return user.username === userName && user.pwd === passWord;
    });

    if (userFound) {
      this.setState({ connectedUser: userFound });
    } else {
      alert("Wrong login or password");
    }
  };

  //delete task selected
  deleteTickedTasks = () => {
    if (window.confirm("Voulez-vous supprimer les tâches terminées")) {
      this.setState({
        /* tasks: tasks.filter((task) => !task.checked), */
        connectedUser: {
          ...this.state.connectedUser,
          tasks: this.state.connectedUser.tasks.filter((task) => !task.checked),
        },
      });
    }
  };

  //changing status of checked whe checbox is checked
  handleCheck = (isChecked, index) => {
    this.setState({
      /* tasks: this.state.tasks.map((task, i) => {
        if (i === index) {
          task.checked = isChecked;
        }
        return task;
      }), */
      connectedUser: {
        ...this.state.connectedUser,
        tasks: this.state.connectedUser.tasks.map((task, i) => {
          if (i === index) {
            task.checked = isChecked;
          }
          return task;
        }),
      },
    });
  };

  render() {
    console.log(this.state.connectedUser.tasks);
    return (
      <div>
        {this.state.connectedUser.hasOwnProperty("id") ? (
          <div>
            <header>
              <Login login={this.state.connectedUser} />
            </header>
            <main>
              <h1>To Do List</h1>
              <Form handleSubmitTask={this.handleSubmitTask} />
              <Table
                taskData={this.state.connectedUser.tasks}
                deleteTickedTasks={this.deleteTickedTasks}
                handleCheck={this.handleCheck}
              />
            </main>
          </div>
        ) : (
          <Connect handleSubmitConnect={this.handleSubmitConnect} />
        )}
      </div>
    );
  }
}

export default App;
