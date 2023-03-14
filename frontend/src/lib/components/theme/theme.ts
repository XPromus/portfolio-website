import { get, writable } from "svelte/store";

export const theme = writable("dark");

export const setLightMode = () => {
    theme.set("light");
}

export const setDarkMode = () => {
    theme.set("dark");
}

export const toggleTheme = () => {
    if (get(theme) == "light") {
        setDarkMode();
    } else {
        setLightMode();
    }
}