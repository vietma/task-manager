export default function taskReducer(state, action) {
  console.log("Reducers - tasks");
  switch (action.type) {
    case "CREATE_TASK": {
      console.log("Reducers - CREATE_TASK");
      return { tasks: state.tasks.concat(action.payload) };
    }

    case "EDIT_TASK": {
      console.log("Reducers - EDIT_TASK");
      // const { payload } = action;
      const payload = action.payload;
      return {
        tasks: state.tasks.map(task => {
          if (task.id === payload.id) {
            // return Object.assign({}, task, payload.params);
            return Object.assign(task, payload.status);
          }
          return task;
        })
      };
    }
    case "FETCH_TASKS_SUCCEEDED": {
      return { tasks: action.payload.tasks };
    }

    default: {
      return state;
    }
  }
}
