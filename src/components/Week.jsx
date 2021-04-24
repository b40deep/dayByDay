import React, { Component } from "react";
import Day from "./Day";
class Week extends Component {
  constructor() {
    super();
    this.state = {
      Monday: ["mon1", "mon2"],
      Tuesday: ["tue1", "tue2"],
      Wednesday: ["wed1", "wed2"],
      Thursday: ["thur1", "thur2"],
      Friday: ["fri1", "fri2"],
      Saturday: ["sat1", "sat2"],
      Sunday: ["sun1", "sun2"],
    };
  }

  handleCreateTask = (day, newTask) => {
    console.log(`Week>> create ${newTask} on ${day}`);
    let temp = Object.create({});
    for (var key in this.state) {
      if (key === day) {
        let newTaskList = this.state[key];
        newTaskList.push(newTask);
        temp = Object.fromEntries(new Map([[day, newTaskList]]));
        console.log("newTaskList>>", newTaskList);
        console.log("temp>>", temp);
        console.log("state>>", this.state);
      }
    }
    // setState
    this.setState(temp);
    temp = [];
    console.log("Week >> Task created successfully!");
  };

  handleDeleteTask = (weekday, taskID) => {
    console.log(`Task ${taskID} to be deleted from ${weekday} `);

  }

  render() {
    return (
      <div className="col">
        {
          <React.Fragment>
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
