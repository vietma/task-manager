import * as api from "../api";

let _id = 1;
export function uniqueId() {
  return _id++;
}

export function createTask({ title, description }) {
  console.log("Action Creator - createTask");
  return {
    type: "CREATE_TASK",
    payload: {
      id: uniqueId(),
      title,
      description,
      status: "Unstarted"
    }
  };
}

// export function editTask(id, params = {}) {
export function editTask(id, status = {}) {
  console.log("Action Creator - editTask");
  return {
    type: "EDIT_TASK",
    payload: {
      id,
      // params
      status
    }
  };
}

/* export function editTask(id, params={}){
  return dispatch => {
    api.editTask()
  }
} */

export function fetchTasks() {
  return dispatch => {
    api.fetchTasks().then(response => {
      dispatch(fetchTasksSucceeded(response.data));
    });
  };
}

function fetchTasksSucceeded(tasks) {
  return {
    type: "FETCH_TASKS_SUCCEEDED",
    payload: { tasks }
  };
}
