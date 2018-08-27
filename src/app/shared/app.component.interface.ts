
export interface AppComponentInterface  {
    title: string;
    hasSearch: boolean;
    searchPlaceHolder: string;
    searchHandler($event:any);
}