import { writable, get } from "svelte/store";
import * as EN from "./english";
import * as DE from "./german";
import * as JP from "./japanese";
import * as MY from "./malay";

export const currentLanguage = writable("us");

export const getNavBarText = () => {
    const lang = get(currentLanguage);
    switch (lang) {
        case "en":
            return EN.navbar;
        case "de":
            return DE.navbar;
        case "jp":
            return JP.navbar;
        case "my":
            return MY.navbar;
    }
}