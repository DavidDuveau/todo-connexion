import React, { Component } from "react";
import "./Table.css";

const TBody = (props) => {
  const handleCheck = (event) => {
    props.handleCheck(
      event.target.checked,
      parseInt(event.target.getAttribute("index"))
    );
  };
  const tableRow = props.taskData.map((task, index) => {
    const isChecked = task.checked ? "checked" : "";
    return (
      <tr key={index}>
        <td className={isChecked}>{task.task}</td>
        <td>
          <input type="checkbox" onChange={handleCheck} index={index} />
        </td>
      </tr>
    );
  });
  return <tbody>{tableRow}</tbody>;
};

class Table extends Component {
  render() {
    const { taskData, deleteTickedTasks, handleCheck } = this.props; //<=> const personData = this.props.personData

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Tache</th>
              <th>Fait</th>
            </tr>
          </thead>
          <TBody taskData={taskData} handleCheck={handleCheck} />
        </table>
        <button onClick={() => deleteTickedTasks()}>Taches terminées</button>
      </div>
    );
  }
}

export default Table;
