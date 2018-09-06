import React, { Component } from "react";
import TaskList from "../TaskList";
import { TASK_STATUSES } from "../../constants";

// const TASK_STATUSES = ["Unstarted", "In Progress", "Completed"];

class TasksPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNewTaskForm: false,
      title: "",
      description: ""
    };
  }

  renderTaskLists() {
    return TASK_STATUSES.map(status => {
      const statusTasks = this.props.tasks.filter(
        task => task.status === status
      );
      return (
        <TaskList
          key={status}
          status={status}
          tasks={statusTasks}
          onStatusChange={this.props.onStatusChange}
        />
      );
    });
  }

  toggleForm = () => {
    this.setState({ showNewTaskForm: !this.state.showNewTaskForm });
  };

  onCreateTask = e => {
    e.preventDefault();
    this.props.onCreateTask({
      title: this.state.title,
      description: this.state.description
    });
    this.resetForm();
  };

  resetForm() {
    this.setState({
      showNewTaskForm: false,
      title: "",
      description: ""
    });
  }

  onTitleChange = e => {
    this.setState({ title: e.target.value });
  };

  onDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };

  render() {
    return (
      <div className="tasks">
        <div className="tasks-header">
          <button className="button button-default" onClick={this.toggleForm}>
            + New Task
          </button>
        </div>
        {this.state.showNewTaskForm && (
          <form className="new-task-form" onSubmit={this.onCreateTask}>
            <input
              className="full-width-input"
              onChange={this.onTitleChange}
              value={this.state.title}
              placeholder="title"
              type="text"
            />
            <input
              className="full-width-input"
              onChange={this.onDescriptionChange}
              value={this.state.description}
              placeholder="description"
              type="text"
            />
            <button className="button" type="submit">
              Save
            </button>
          </form>
        )}

        <div className="task-lists">{this.renderTaskLists()}</div>
      </div>
    );
  }
}

export default TasksPage;
