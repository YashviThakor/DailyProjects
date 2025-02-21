import React, { createContext, useReducer, useContext, useMemo, useCallback } from "react";
//task type
export interface Task {
  id: number;
  text: string;
  completed: boolean;
}
// action type
const ADD_TASK = "ADD_TASK";
const REMOVE_TASK = "REMOVE_TASK";
const TOGGLE_TASK = "TOGGLE_TASK";
// action interface
interface Action {
  type: string;
  payload?: any;
}
// reducer function
const taskReducer = (state: Task[], action: Action): Task[] => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case REMOVE_TASK:
      return state.filter((task) => task.id !== action.payload);
    case TOGGLE_TASK:
      return state.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};
// Context
const TaskContext = createContext<any>(null);

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);

  const addTask = useCallback((text: string) => {
    dispatch({ type: ADD_TASK, payload: text });
  }, []);

  const removeTask = useCallback((id: number) => {
    dispatch({ type: REMOVE_TASK, payload: id });
  }, []);

  const toggleTask = useCallback((id: number) => {
    dispatch({ type: TOGGLE_TASK, payload: id });
  }, []);

  const completedCount = useMemo(() => tasks.filter((task) => task.completed).length, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, toggleTask, completedCount }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTask = () => useContext(TaskContext);
