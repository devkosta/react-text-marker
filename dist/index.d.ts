/// <reference types="react" />
interface MarkTextProps {
    textToMark: string;
    isCaseSensitive: boolean;
    markedWords: Array<string>;
    markerColor: string;
}
declare const MarkedText: ({ textToMark, isCaseSensitive, markedWords, markerColor }: MarkTextProps) => JSX.Element;

export { MarkedText };
