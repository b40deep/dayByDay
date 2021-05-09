import React, { Component } from 'react';

class NewTask extends Component {
	displayerror() {
		console.log('changed to block');
		document.getElementById('err' + this.props.taskDay).removeAttribute('hidden');
	}

	submitNewTask = (e) => {
		console.log(`"submitted" `);
		// console.log(`"submitted" ${day}`);
		// console.dir(`NewTask>> ${this.props.taskDay} ${this.refs.newTask.value}`);
		//do text checks before sending data upstream
		let textPending = this.refs.newTask.value.trim();
		textPending.length == '' ? this.displayerror() : this.props.onSubmit(this.props.taskDay, textPending);
		document.getElementById('newTask' + this.props.taskDay).reset();
		e.preventDefault();
	};

	clearErrors(day) {
		// console.log(day, 'clear');
		document.getElementById('err' + day).setAttribute('hidden', '');
	}
	render() {
		// console.log();
		return (
			<li key={'li' + this.props.taskDay} className="list-group-item">
				<form id={'newTask' + this.props.taskDay} action="" onSubmit={this.submitNewTask}>
					<input
						type="text"
						className="form-control"
						placeholder="Add new task"
						ref="newTask"
						onChange={() => this.clearErrors(this.props.taskDay)}
					/>
					{/* <div className="alert alert-danger py-1" role="alert" display={this.displayError}>
						Please enter a task.
					</div> */}
					<small id={'err' + this.props.taskDay} className="form-text p-1 bg-warning text-dark " hidden>
						Please enter a task.
					</small>
				</form>
			</li>
		);
	}
}
export default NewTask;
