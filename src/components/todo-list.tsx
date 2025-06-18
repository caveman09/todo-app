import { memo, useContext, useState } from "react";
import TodoWidget, { type todo } from "./todo-widget";
import { TodosContext } from "../context/TodosContext";
import SimpleButton from "./ui/simple-button";

export const TodoList = memo(function TodoList() {
    const { todos } = useContext(TodosContext) || { todos: [] };

    return (
        <div className="overflow-y-auto h-[98%]">
            {todos.map((todo) => (<TodoWidget key={todo.id} todo={todo} />))}
        </div>
    )
})

export const TodoInput = memo(function TodoInput() {
    const [inputText, setInputText] = useState<string>("");
    const { addTodo } = useContext(TodosContext) || {};

    function addNewTodo() {
        if (inputText) {
            const newTodo: todo = {
                title: inputText,
                completed: false
            };
            addTodo?.(newTodo);
        }
        setInputText("");
    }

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            addNewTodo();
        }}>
            <div className="flex flex-grow-1 justify-between">
                <input type='text' placeholder='Add a new todo here...' className="bg-amber-300 flex-grow-1 rounded-md p-4" value={inputText} onChange={(e) => { setInputText(e.target.value); }} />
                <SimpleButton type="submit" variant={"primary"} size={"medium"}>
                    Add
                </SimpleButton>
            </div>
        </form>
    )
})