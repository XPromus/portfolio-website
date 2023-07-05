import type { Readable, Writable } from "svelte/store";
import { I18nService } from "./i18n-service"
import { I18NextTranslationService, type TType } from "./translation-service";
import { getContext, setContext } from "svelte";

export const initLocalizationContext = () => {
    const i18n = new I18nService();
    const translator = new I18NextTranslationService(i18n);

    setLocalization({
        t: translator.translate,
        currentLanguage: translator.locale,
    });

    return {
        i18n,
    };
}

const CONTEXT_KEY = "t";

export type I18nContext = {
    t: Readable<TType>;
    currentLanguage: Writable<string>;
}

export const setLocalization = (context: I18nContext) => {
    return setContext<I18nContext>(CONTEXT_KEY, context);
}

export const getLocalization = () => {
    return getContext<I18nContext>(CONTEXT_KEY);
}