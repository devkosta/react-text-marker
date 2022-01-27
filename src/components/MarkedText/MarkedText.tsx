import React from 'react';

export interface MarkTextProps {
    textToMark: string;
    isCaseSensitive?: boolean;
    markedWords: Array<string>;
    markerColor?: string;
}

const MarkedText = ({ textToMark, isCaseSensitive = false, markedWords, markerColor = '#F6E05E' }: MarkTextProps) => {
	const markElement = `<mark style='background-color: ${markerColor}'>$&</mark>`;
	const reFlag = `g${isCaseSensitive ? '' : 'i'}`;

	markedWords.forEach((word) => {
		const re = new RegExp(word, reFlag);
		textToMark = textToMark.replace(re, markElement);
	});

	return <span dangerouslySetInnerHTML={{ __html: textToMark }} />;
};

export default MarkedText;