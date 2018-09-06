import { uniqueId } from "../actions";

const mockTasks = [
  {
    id: uniqueId(),
    title: "Learn Redux",
    description: "The store, action and reducers",
    status: "In Progress"
  },
  {
    id: uniqueId(),
    title: "Peace on Earth",
    description: "No big deal",
    status: "Unstarted"
  },
  {
    id: uniqueId(),
    title: "Redux in Action",
    description: "The best Redux book",
    status: "Completed"
  },
  {
    id: uniqueId(),
    title: "React and Redux",
    description: "Best of two worlds",
    status: "Unstarted"
  }
];

export default function tasks(state = { tasks: mockTasks }, action) {
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
