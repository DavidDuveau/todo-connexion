import React, { Component } from "react";
import Table from "./Table";
import Form from "./Form";
import Connect from "./Connect";
import ShowLoggedin from "./ShowLoggedin";
import LogoutButton from "./LogoutButton";
import SubscribeButton from "./SubscribeButton";
import Subscribe from "./Subscribe";

import "./App.css";

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
      {
        id: 2,
        username: "Camille",
        pwd: "1337",
        tasks: [],
      },
    ],
    connectedUser: {},
    isClicked: false,
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

  handleLogout = () => {
    this.setState({ connectedUser: {} });
  };

  handleClickSubscribe = () => {
    this.setState({ isClicked: !this.state.isClicked });
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

  //add new user
  addUser = (newUser) => {
    this.setState({ users: [...this.state.users, newUser] });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.isClicked ? (
          <Subscribe />
        ) : (
          <div>
            {this.state.connectedUser.hasOwnProperty("id") ? (
              <div>
                <header id="logged-page">
                  <ShowLoggedin login={this.state.connectedUser} />
                  <LogoutButton handleLogout={this.handleLogout} />
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
              <div>
                <header id="log-in-page">
                  <SubscribeButton
                    handleClickSubscribe={this.handleClickSubscribe}
                  />
                </header>
                <main>
                  <Connect handleSubmitConnect={this.handleSubmitConnect} />
                </main>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
