import React, { Component } from 'react';
import NewTask from './NewTask';

class Day extends Component {
	state = {};

	render() {
		let task = [];
		let checkedStatus = false;
		const day = this.props.weekday;
		for (let i = 0; i < this.props.daytasks.length; i++) {
			if (i % 2 === 0) {
				checkedStatus = this.props.daytasks[1 + i] === false ? false : true;

				task.push(
					<li key={this.props.weekday + i} className="list-group-item py-1 ">
						<input
							type="checkbox"
							className="m-2"
							id={i + this.props.weekday}
							value={i + this.props.weekday}
							onChange={this.props.onCompleteTask}
							defaultChecked={checkedStatus}
						/>
						{checkedStatus ? <em> {this.props.daytasks[i]}</em> : this.props.daytasks[i]}
						<button
							type="button"
							className="close"
							aria-label="Close"
							onClick={() => this.props.onDeleteTask(this.props.weekday, this.props.daytasks[i], i)}
						>
							<span aria-hidden="true">&times;</span>
						</button>
					</li>
				);
				checkedStatus = false;
			}
		}
		// console.log(`newTask is ${this.state.newTask}`);

		return (
			<div className="">
				{<h5>{day} </h5>}
				<ul className="list-group list-group-flush">
					{task}
					<NewTask taskDay={day} onSubmit={this.props.onCreateTask} />
				</ul>
			</div>
		);
	}
}

export default Day;
