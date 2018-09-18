import * as api from "../api";

let _id = 1;
export function uniqueId() {
  return _id++;
}

export function createTask({ title, description, status = "Unstarted" }) {
  return dispatch => {
    api
      .createTask({ title, description, status })
      .then(response => dispatch(createTaskSucceeded(response.data)));
  };
}

function createTaskSucceeded(task) {
  return {
    type: "CREATE_TASK_SUCCEEDED",
    payload: {
      task
    }
  };
}

export function editTask(id, params = {}) {
  return (dispatch, getState) => {
    const originalTask = getTaskById(getState().tasks, id);
    const updatedTask = Object.assign({}, originalTask, params);
    api.editTask(id, updatedTask).then(response => {
      dispatch(editTaskSucceeded(response.data));
    });
  };
}

function editTaskSucceeded(task) {
  return {
    type: "EDIT_TASK_SUCCEEDED",
    payload: {
      task
    }
  };
}

function getTaskById(tasks, id) {
  return tasks.find(task => task.id === id);
}

export function fetchTasks() {
  return dispatch => {
    dispatch(fetchTasksStarted());
    api
      .fetchTasks()
      .then(response => {
        setTimeout(() => {
          dispatch(fetchTasksSucceeded(response.data));
        }, 2000);
        // throw new Error("Error!!! Unable to fetch tasks!");
      })
      .catch(error => {
        dispatch(fetchTasksFailed(error.message));
      });
  };
}

function fetchTasksStarted() {
  return {
    type: "FETCH_TASKS_STARTED"
  };
}

function fetchTasksSucceeded(tasks) {
  return {
    type: "FETCH_TASKS_SUCCEEDED",
    payload: {
      tasks
    }
  };
}

function fetchTasksFailed(error) {
  return {
    type: "FETCH_TASKS_FAILED",
    payload: {
      error
    }
  };
}

export function filterTasks(searchTerm) {
  return {
    type: "FILTER_TASKS",
    payload: {
      searchTerm
    }
  };
}
