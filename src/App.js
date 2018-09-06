import React, { Component } from "react";
import TasksPage from "./components/TasksPage";
/* import logo from './logo.svg';
import './App.css'; */
import { connect } from "react-redux";
import { createTask, editTask } from "./actions";

class App extends Component {
  onCreateTask = ({ title, description }) => {
    this.props.dispatch(createTask({ title, description }));
  };

  onStatusChange = (id, status) => {
    this.props.dispatch(editTask(id, { status }));
  };

  render() {
    // console.log("props from App ", this.props);
    console.log("App component");
    return (
      <div className="main-content">
        <TasksPage
          tasks={this.props.tasks}
          onCreateTask={this.onCreateTask}
          onStatusChange={this.onStatusChange}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { tasks: state.tasks };
}

export default connect(mapStateToProps)(App);
