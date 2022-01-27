# React Text Marker

A React Component to Selectively Mark Words within a Body of Text.

Check Out the [Demo](http://kostahassouros.com/).

## Installation

```
npm install @devkosta/react-text-marker --save-dev
```

```
yarn add @devkosta/react-text-marker
```

## How to Use

```jsx
import React from 'react';
import { MarkedText } from '@devkosta/react-text-marker';

const Example = () => {
    return (
        <MarkedText
            textToMark='Hello, World! This is some marked text.'
            isCaseSensitive={true}
            markedWords={['Hello', 'marked text']}
            markerColor='#9AE6B4'
        />
    );
};
```

## Props

| Property | Type | Required? | Description |
|:---|:---|:---:|:---|
| textToMark | String | ✓ | The text in which the words will be marked. |
| isCaseSensitive | Boolean | | The markedWord are case sensitive. Defaults to `false`. |
| markedWords | Array<String> | ✓ | The words in which will be marked. |
| markerColor | String | | The color of the marker. Defaults to `#F6E05E`. |

## License

MIT © [DevKosta](https://github.com/DevKosta)