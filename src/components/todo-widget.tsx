import { memo, useState } from "react";

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

const TodoWidget = ({ todo }: { todo: todo }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className="flex">
            <li className="p-1 text-gray-800 font-semibold hover:bg-amber-100 rounded-md transition-colors flex flex-grow justify-between"
                onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
                <div className="flex gap-x-3">
                    <TodoIdWidget id={todo.id || 0} />
                    <span className="my-auto">{todo.title}</span>
                </div>
                {hovered && <span className="my-auto mr-2">{todo.completed ? " ✅" : " ❌"}</span>}
            </li>
        </div>
    )
}

export default memo(TodoWidget);
export type { todo };