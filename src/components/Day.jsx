import React, { Component } from "react";
import NewTask from "./NewTask";

class Day extends Component {
  state = {};

  render() {
    let task = [];
    const day = this.props.weekday;
    for (let i = 0; i < this.props.daytasks.length; i++) {
      task.push(
        <li key={this.props.daytasks[i]} className="list-group-item">
          {this.props.daytasks[i]}
        </li>
      );
    }
    // console.log(`newTask is ${this.state.newTask}`);

    return (
      <div className="">
        {<h5>{day} </h5>}
        <ul className="list-group">
          {task}
          <NewTask
            taskDay={day}
            onSubmit={this.props.onCreateTask}
          />
        </ul>
      </div>
    );
  }
}

export default Day;
