export interface LangDirection {
    direction : 'rtl'|'ltr'
    rtl: boolean
}

export function getDirection(locale : string) : LangDirection{
    if (locale.startsWith('ar')) {
        return {
            direction: 'rtl',
            rtl: true
        };
    }

    return {
        direction: 'ltr',
        rtl: false
    };
}

export function parseLocale(locale : string|null|undefined){
    return locale || DEFAULT_LOCALE
}

export const DEFAULT_LOCALE : string = 'en'

export const DEFAULT_LANG_DIRECTION : LangDirection = {
    direction: 'ltr',
    rtl: false
}