import React, { Component } from "react";

class NewTask extends Component {
  submitNewTask = e => {
    // console.log(`"submitted" ${day}`);
    console.dir(`NewTask>> ${this.props.taskDay} ${this.refs.newTask.value}`);
    this.props.onSubmit(this.props.taskDay, this.refs.newTask.value);
    e.preventDefault();
  };
  render() {
    return (
      <li key={this.props.taskKey} className="list-group-item">
        <form action="" onSubmit={this.submitNewTask}>
          {/* <div className="form-group"> */}
          {/* <label htmlFor="newTask" >Add new task: </label> */}
          <input
            type="text"
            className="form-control"
            placeholder="Add new task"
            ref="newTask"
          />
          {/* </div> */}
        </form>
      </li>
    );
  }
}
export default NewTask;
