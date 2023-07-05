import i18next from "i18next";
import type {i18n, Resource} from "i18next";
import translations from "./language";

const INITIAL_LANGUAGE = "en";

export class I18nService {
    i18n: i18n;
    constructor() {
        this.i18n = i18next;
        this.initialize();
        this.changeLanguage(INITIAL_LANGUAGE);
    }

    t(key: string, replacements?: Record<string, unknown>): string {
        return this.i18n.t(key, replacements);
    }

    initialize() {
        this.i18n.init({
            lng: INITIAL_LANGUAGE,
            fallbackLng: 'en',
            debug: false,
            defaultNS: 'translation',
            fallbackNS: 'translation',
            resources: translations as Resource,
            interpolation: {
              escapeValue: false,
            },
        });
    }

    changeLanguage(language: string) {
        this.i18n.changeLanguage(language);
    }

}