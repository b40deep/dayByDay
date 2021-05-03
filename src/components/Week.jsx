import React, { Component } from "react";
import Day from "./Day";
class Week extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    //load saved task list from localStorage
    this.handleReadFromStorage();
    console.log("cdm successful");
  }

  handleCreateTask = (day, newTask) => {
    console.log(`Week>> create ${newTask} on ${day}`);
    let temp = Object.create({});
    for (var key in this.state) {
      if (key === day) {
        let newTaskList = this.state[key];
        newTaskList.push(newTask);
        temp = Object.fromEntries(new Map([[day, newTaskList]]));
        // console.log("newTaskList>>", newTaskList);
        // console.log("temp>>", temp);
        // console.log("state>>", this.state);
      }
    }
    // setState
    this.handleWriteToStateAndStorage(temp);
    temp = [];
    console.log("WEEK >> Task created successfully!");
  };

  handleDeleteTask = (weekday, task, taskKey) => {
    console.log(
      `Task ${task} with key ${taskKey} to be deleted from ${weekday} `
    );
    let temp = Object.create({});
    for (var key in this.state) {
      if (key === weekday) {
        let newTaskList = this.state[key];
        newTaskList.splice(taskKey, 1);
        temp = Object.fromEntries(new Map([[weekday, newTaskList]]));
        console.log(`newTaskListTesting`, newTaskList);
      }
    }
    //setState
    this.handleWriteToStateAndStorage(temp);
    temp = [];
  };

  handleWriteToStateAndStorage = (update) => {
    //set the state
    //need to protect state from broken/empty update
    if (update !== null) this.setState(update);

    //then write changes to local storage
    localStorage.setItem("state", JSON.stringify(this.state));
  };

  handleWriteToStateOnly = (update) => {
    //set the state
    //need to protect state from broken/empty update
    if (update !== null) this.setState(update);
  };

  handleReadFromStorage() {
    let fromLocalStorage = JSON.parse(localStorage.getItem("state"));
    if (fromLocalStorage !== null)
      this.handleWriteToStateOnly(fromLocalStorage);
    // console.log('FLS________', fromLocalStorage);
    console.log("ReadFromStorage successful");
  }

  handleClearStorage() {
    localStorage.clear();
    console.log("ClearStorage successful");
  }

  handleCompleteTask = (e) => {
    //which task triggered the checkbox
    let task = e.target.value;
    //is it complete or incomplete?
    let status = e.target.checked;
    //do something based on answer
    console.log(`${task} is ${status}`);
  };

  tempInitStorage() {
    const tempInit = {
      Monday: ["mon1", "mon2"],
      Tuesday: ["tue1", "tue2"],
      Wednesday: ["wed1", "wed2"],
      Thursday: ["thur1", "thur2"],
      Friday: ["fri1", "fri2"],
      Saturday: ["sat1", "sat2"],
      Sunday: ["sun1", "sun2"],
    };
    localStorage.setItem("state", JSON.stringify(tempInit));
    console.log("InitStorage successful");
  }

  render() {
    return (
      <div className="col">
        {
          <React.Fragment>
            <div className="btn-group btn-group-sm" role="group">
              <div className="btn btn-outline-secondary disabled">
                <span>Debug buttons >>> </span>
              </div>
              <button
                className="btn btn-outline-info btn-sm "
                onClick={() => {
                  this.handleReadFromStorage();
                }}
              >
                Load Tasks
              </button>
              <button
                className="btn btn-outline-success btn-sm "
                onClick={() => {
                  this.tempInitStorage();
                }}
              >
                Save Tasks
              </button>
              <button
                className="btn btn-outline-warning btn-sm "
                onClick={() => {
                  this.handleClearStorage();
                }}
              >
                Clear Tasks
              </button>
            </div>
            <h1>Week</h1>

            <ul className="list-group">
              {/* {console.log(Object.entries(this.state))} */}
              {Object.entries(this.state).map((arrayPair) => (
                <li className="list-group-item" key={arrayPair[0]}>
                  <Day
                    daytasks={arrayPair[1]}
                    weekday={arrayPair[0]}
                    onCreateTask={this.handleCreateTask}
                    onDeleteTask={this.handleDeleteTask}
                    onLoadTasks={this.handleReadFromStorage}
                    onCompleteTask={this.handleCompleteTask}
                  />
                </li>
              ))}
            </ul>
          </React.Fragment>
        }
      </div>
    );
  }
}

export default Week;
