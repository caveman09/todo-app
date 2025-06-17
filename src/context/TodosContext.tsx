import React, { createContext, useEffect, useState } from "react";
import type { todo } from "../components/todo-widget";

interface TodosContextType {
    todos: todo[];
    setTodos: (todos: todo[]) => void;
    addTodo?: (todo: todo) => void;
    removeTodo?: (id: number) => void;
}

const defaultTodos: todo[] = [
    {
        id: 1,
        title: "Buy Groceries",
        completed: false
    },
    {
        id: 2,
        title: "Walk the dog",
        completed: false
    },
    {
        id: 3,
        title: "Read a book",
        completed: false
    }
];

export const TodosContext = createContext<TodosContextType | undefined>(undefined);
export function TodosProvider({ children }: { children: React.ReactNode }) {
    const [todos, setTodos] = useState<todo[]>([]);

    useEffect(() => {
        setTodos(defaultTodos);
    }, []);

    const addTodo = (todo: todo) => {
        if (!todo.id) {
            todo.id = todos.length;
        }
        setTodos((prevTodos) => [...prevTodos, todo]);
    };

    const removeTodo = (id: number) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <TodosContext.Provider value={{ todos, setTodos, addTodo, removeTodo }}>
            {children}
        </TodosContext.Provider>
    )
}