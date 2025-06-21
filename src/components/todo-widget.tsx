import { memo, useState, useRef } from "react";
import { createPortal } from "react-dom";
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
    const [showTooltip, setShowTooltip] = useState(false);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [buttonRect, setButtonRect] = useState<DOMRect | null>(null);

    function HandleMouseEnter() {
        if (buttonRef.current) {
            setButtonRect(buttonRef.current.getBoundingClientRect());
        }
        setShowTooltip(true);

        console.log("Button Rect:", buttonRect);
    }

    function HandleMouseLeave() {
        setShowTooltip(false);
    }

    return (
        <>
            {hovered && (
                <SimpleButton variant={"secondary"} size={"small"} className="group relative" onMouseEnter={HandleMouseEnter} onMouseLeave={HandleMouseLeave} ref={buttonRef}>
                    <span className="m-0 p-0">{todo.completed ? "✅" : "❌"}</span>
                </SimpleButton>
            )}
            {showTooltip && (
                createPortal(
                    <div className={`fixed z-50 bg-white shadow-lg p-4 rounded text-zinc-900`}
                        style={{
                            top: buttonRect ? buttonRect.bottom + 8 : 0,
                            left: buttonRect ? buttonRect.left : 0,
                        }}
                    >
                        Tooltip!
                    </div >, document.body)
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