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
        id: 1,
        username: "David",
        pwd: "1234",
        tasks: [
          { task: "faire la vaisselle", checked: true },
          { task: "coder", checked: false },
        ],
      },
      {
        id: 2,
        username: "Julien",
        pwd: "0000",
        tasks: [],
      },
      {
        id: 3,
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
    let userIndex;
    let userFound = this.state.users.find((user, i) => {
      userIndex = i;
      return user.username === userName && user.pwd === passWord;
    });

    if (userFound) {
      userFound.index = userIndex;
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
    this.setState(
      {
        connectedUser: {
          ...this.state.connectedUser,
          tasks: [
            ...this.state.connectedUser.tasks,
            { task: task, checked: false },
          ],
        },
      },
      this.updateUserTask
    );
  };

  updateUserTask = () => {
    this.setState({
      users: this.state.users.map((user, i) => {
        if (i === this.state.connectedUser.index) {
          user.tasks = this.state.connectedUser.tasks;
        }
        return user;
      }),
    });
  };

  //delete task selected
  deleteTickedTasks = () => {
    if (window.confirm("Voulez-vous supprimer les tâches terminées")) {
      this.setState(
        {
          /* tasks: tasks.filter((task) => !task.checked), */
          connectedUser: {
            ...this.state.connectedUser,
            tasks: this.state.connectedUser.tasks.filter(
              (task) => !task.checked
            ),
          },
        },
        this.updateUserTask
      );
    }
  };

  //changing status of checked when checbox is checked
  handleCheck = (isChecked, index) => {
    this.setState({
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
    this.setState({ connectedUser: newUser });
  };

  render() {
    console.log(this.state.users, this.state.connectedUser);
    return (
      <div>
        {this.state.isClicked ? (
          <div>
            <header>
              <SubscribeButton
                handleClickSubscribe={this.handleClickSubscribe}
              />
            </header>
            <main>
              <Subscribe
                connectedUser={this.state.connectedUser}
                addUser={this.addUser}
                usersData={this.state.users}
                handleClickSubscribe={this.handleClickSubscribe}
              />
            </main>
          </div>
        ) : (
          <div>
            {this.state.connectedUser.hasOwnProperty("id") ? (
              <div>
                <header id="logged">
                  <ShowLoggedin login={this.state.connectedUser} />
                  <LogoutButton handleLogout={this.handleLogout} />
                </header>
                <main>
                  <fieldset>
                    <legend>ToDo List</legend>
                    <Form handleSubmitTask={this.handleSubmitTask} />
                    <Table
                      taskData={this.state.connectedUser.tasks}
                      deleteTickedTasks={this.deleteTickedTasks}
                      handleCheck={this.handleCheck}
                    />
                  </fieldset>
                </main>
              </div>
            ) : (
              <div>
                <header>
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
