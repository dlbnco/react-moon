# 🌚 react-moon

> Moon component for React

[![NPM](https://img.shields.io/npm/v/react-moon.svg)](https://www.npmjs.com/package/react-moon)

### 🌑🌒🌓🌔🌕🌖🌗🌘🌑

## Install

```bash
npm install --save react-moon
```

## Usage

```jsx
import React from 'react';
import Moon from 'react-moon';

export default () => <Moon phase={0.16} size={128} />;
```

### props

| prop         | description                               | type   | default           |
| ------------ | ----------------------------------------- | ------ | ----------------- |
| `phase`      | Moon phase from 0 to 1. Full moon is 0.5. | Number  | `0.16`            |
| `size`       | Diameter in pixels                        | Number | `80`              |
| `lightColor` | Color of the light side                   | String | `white`           |
| `darkColor`  | Color of the dark side                    | String | `black`           |
| `border`     | CSS value for border                      | String | `4px solid black` |

## Known issues

- Size must be static and, if bigger, the moon will overflow its container
