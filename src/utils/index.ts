import dayjs from 'dayjs';

type DateFormat = 'DD-MM-YYYY' | 'HH:mm A · MMM DD, YYYY' | 'HH:mm:ss DD/MM/YYYY';

export function getAsString(value: string | string[] | undefined): string {
    if (value === undefined) {
        return '';
    }

    if (Array.isArray(value)) {
        return value[0];
    }

    return value;
}

export function getValueNumber(value: string | string[]) {
    const str = getAsString(value);
    const number = parseInt(str);
    return isNaN(number) ? null : number;
}

export function getValueString(value: string | string[]) {
    const str = getAsString(value);
    return !str || str.toLowerCase() === 'all' ? null : str;
}

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export function capitalize(str: string): string {
    return str.replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));
}

export function formatTime(value: string, format: DateFormat = 'DD-MM-YYYY') {
    return dayjs(value).format(format);
}
