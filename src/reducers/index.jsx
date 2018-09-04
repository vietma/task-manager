const mockTasks = [
  {
    id: 1,
    title: "Learn Redux",
    description: "The store, action and reducers",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Peace on Earth",
    description: "No big deal",
    status: "Unstarted"
  },
  {
    id: 3,
    title: "Redux in Action",
    description: "The best Redux book",
    status: "Completed"
  },
  {
    id: 4,
    title: "React and Redux",
    description: "Best of two worlds",
    status: "Unstarted"
  }
];

export default function tasks(state = { tasks: mockTasks }, action) {
  return state;
}
