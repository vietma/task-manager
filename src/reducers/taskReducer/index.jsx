import { createSelector } from "reselect";
import { TASK_STATUSES } from "../../constants";

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

    case "FILTER_TASKS": {
      return {
        ...state,
        isLoading: false,
        searchTerm: action.payload.searchTerm
      };
    }

    default: {
      return state;
    }
  }
}

const getTasks = state => state.tasks;
const getSearchTerm = state => state.searchTerm;

export const getFilteredTasks = createSelector(
  [getTasks, getSearchTerm],
  (tasks, searchTerm) => {
    return tasks.filter(task => task.title.match(new RegExp(searchTerm, "i")));
  }
);

export const getGroupedAndFilteredTasks = createSelector(
  [getFilteredTasks],
  tasks => {
    const grouped = {};
    TASK_STATUSES.forEach(status => {
      grouped[status] = tasks.filter(task => task.status === status);
    });
    return grouped;
  }
);
