// export default function taskReducer(state = { tasks: mockTasks }, action) {
export default function taskReducer(state, action) {
  console.log("Reducers - tasks");
  if (action.type === "CREATE_TASK") {
    console.log("Reducers - CREATE_TASK");
    return { tasks: state.tasks.concat(action.payload) };
  }
  if (action.type === "EDIT_TASK") {
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
  return state;
}
