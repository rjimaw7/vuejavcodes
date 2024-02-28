/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import numeral from 'numeral';
import { faker } from '@faker-js/faker';
// import { camelize, getCurrentInstance, toHandlerKey } from 'vue';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const formatNumber = (value: number): string => {
    if (value >= 1e6) {
        return `${numeral(value / 1e6).format('0.[0]a')}M`;
    }
    if (value >= 1e3) {
        return `${numeral(value / 1e3).format('0.[0]a')}K`;
    }
    return numeral(value).format('0');
};

export const generateRandomNumber = (): number => {
    return faker.number.int({ max: 5000000 });
};

export const isStringEnclosedInBrackets = (inputString: string) => {
    const regex = /^\[.*\]$/;

    // Test if the inputString matches the regex
    return regex.test(inputString);
};
