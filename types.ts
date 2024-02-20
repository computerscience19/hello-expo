export interface Webtoon {
    webtoonId: number;
    title: string;
    author: string;
    img: string;
    fancount: number;
}

export type RootStackParamList = {
    One: undefined;
    Two: undefined;
    Three: undefined;
    webtoon: undefined;
}
