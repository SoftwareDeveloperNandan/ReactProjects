import { createContext, useContext } from "react";

export const TodoContext = createContext({
        todos: [
            {
                id: 1,
                todo: "Todo msg",
                completed: false,

            }
        ],
        addTodo: (todo) => {},
        updateTodo: (id, todo) => {},
        deleteTodo: (id) => {},
        toggleComplete: (id) => {}
})

export const useTodo = () => {
    // kiske bare me baat karna hai like login, register, etc.
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider