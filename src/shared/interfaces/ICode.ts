export interface ICodes {
    id?: string;
    title: string;
    views: number;
}

export type SortByType = 'latest' | 'oldest' | 'most_viewed';

export interface ICodeSort {
    sort_by?: 'latest' | 'oldest' | 'most_viewed';
}
