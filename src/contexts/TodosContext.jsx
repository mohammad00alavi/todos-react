import { createContext, useState } from "react";

const TodosContext = createContext();

export const TodosProvider = ({ children }) => {
  const [todosCounter, setTodosCounter] = useState(0);

  const todosCounterHandler = (value) => {
    setTodosCounter(value);
  }

  return (
    <TodosContext.Provider value={{todosCounter, todosCounterHandler}} >
      {children}
    </TodosContext.Provider>
  )
}

export default TodosContext;