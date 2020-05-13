import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";
const defaultTodos = [
  { id: 1, task: "Wash bike", completed: false },
  { id: 2, task: "Lube bike", completed: true }
];
export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}