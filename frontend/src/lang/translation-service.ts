import { writable, type Readable, type Writable, derived } from "svelte/store";
import type { I18nService } from "./i18n-service";

export type TType = (text: string, replacements?: Record<string, unknown>) => string;

export interface TranslationService {
    locale: Writable<string>;
    translate: Readable<TType>;
}

export class I18NextTranslationService implements TranslationService {
    public locale: Writable<string>;
    public translate: Readable<TType>;

    constructor(i18n: I18nService) {
        this.locale = this.createLocale(i18n);
        this.translate = this.createTranslate(i18n);
    }

    private createLocale(i18n: I18nService) {
        const { subscribe, set, update } = writable<string>(i18n.i18n.language);
        const setLocale = (newLocale: string) => {
            i18n.changeLanguage(newLocale);
            set(newLocale);
        };

        const updateLocale = (updater: (value: string) => string) => {
            update(currentValue => {
                const nextLocale = updater(currentValue);
                i18n.changeLanguage(nextLocale);
                return nextLocale;
            });
        };

        return {
            subscribe,
            update: updateLocale,
            set: setLocale,
        };
    }

    private createTranslate(i18n: I18nService) {
        return derived([this.locale], () => {
            return (key: string, replacements?:Record<string, unknown>) => i18n.t(key, replacements);
        });
    }  

}