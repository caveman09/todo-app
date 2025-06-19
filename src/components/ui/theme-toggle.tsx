import { memo } from "react";
import { useTheme } from "../../context/ThemeProvider";
import SimpleButton from "./simple-button";

const ThemeToggle = memo(() => {
    const { theme, toggleTheme } = useTheme();

    return (
        <SimpleButton onClick={toggleTheme} variant={"ghost"} size={"small"} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`} className="rounded-full mx-2 p-2">
            {theme === "dark" ? "🌞" : "🌙"}
        </SimpleButton>
    )
});

export default ThemeToggle;
