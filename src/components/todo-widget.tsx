import { memo, useState } from "react";
import SimpleButton from "./ui/simple-button";

interface todo {
    id?: number;
    title: string;
    completed: boolean;
}

const TodoIdWidget = memo(({ id }: { id: number }) => {
    return (
        <span className="text-black border-4 rounded-3xl  px-3 py-1 text-md bg-amber-50 ">{id}</span>
    )
})

const ToggleCompletedButton = memo(({ hovered, todo }: { hovered: boolean, todo: todo }) => {
    return (
        <>
            {hovered && (
                <SimpleButton variant={"secondary"} size={"small"}>
                    <span className="m-0 p-0">{todo.completed ? "✅" : "❌"}</span>
                </SimpleButton>
            )}
        </>
    )
})

const TodoWidget = ({ todo }: { todo: todo }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="flex">
            <li className="p-1 text-gray-800 dark:text-amber-50  font-semibold hover:bg-amber-100 dark:hover:bg-amber-100/10  rounded-md transition-colors flex flex-grow justify-between"
                onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className="flex gap-x-3">
                    <TodoIdWidget id={todo.id || 0} />
                    <span className="my-auto">{todo.title}</span>
                </div>
                <ToggleCompletedButton hovered={hovered} todo={todo} />
            </li>
        </div>
    )
}

export default memo(TodoWidget);
export type { todo };