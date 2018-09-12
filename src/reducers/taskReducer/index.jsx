export default function taskReducer(state, action) {
  console.log("Reducers - tasks");
  switch (action.type) {
    case "CREATE_TASK_SUCCEEDED": {
      console.log("Reducers - CREATE_TASK");
      const { payload } = action;
      return {
        ...state,
        tasks: state.tasks.concat(payload.task)
      };
    }

    case "EDIT_TASK_SUCCEEDED": {
      console.log("Reducers - EDIT_TASK");
      const { payload } = action;
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === payload.task.id) {
            return payload.task;
          }
          return task;
        })
      };
    }
    case "FETCH_TASKS_SUCCEEDED": {
      return {
        ...state,
        tasks: action.payload.tasks,
        isLoading: false
      };
    }

    case "FETCH_TASKS_STARTED": {
      return {
        ...state,
        isLoading: true
      };
    }

    case "FETCH_TASKS_FAILED": {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error
      };
    }

    default: {
      return state;
    }
  }
}
