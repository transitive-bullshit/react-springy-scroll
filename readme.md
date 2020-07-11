# react-springy-scroll ([demo](https://transitive-bullshit.github.io/react-springy-scroll/))

> React utility that adds a physical springiness to elements on scroll.

[![NPM](https://img.shields.io/npm/v/react-springy-scroll.svg)](https://www.npmjs.com/package/react-springy-scroll) [![Build Status](https://travis-ci.com/transitive-bullshit/react-springy-scroll.svg?branch=master)](https://travis-ci.com/transitive-bullshit/react-springy-scroll) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

[![Demo](https://raw.githubusercontent.com/transitive-bullshit/react-springy-scroll/master/example/demo.gif)](https://transitive-bullshit.github.io/react-springy-scroll/)

## Install

```bash
npm install --save react-springy-scroll
```

## Usage

Check out the [demo](https://transitive-bullshit.github.io/react-springy-scroll/).

```jsx
import React, { Component } from 'react'

import Springy from 'react-springy-scroll'

export default class App extends Component {
  render () {
    return (
      <Springy>
        <div>This div will move like a spring on scroll.</div>
      </Springy>
    )
  }
}

```

## Props

| Property    | Type             | Default  | Description |
|:------------|:-----------------|:---------|:------------|
| `children`    | `Node`  | **required** | Children element(s) to make add springiness to. |
| `...`       | ...              | undefined | Any other props are applied to the root element. |

## License

MIT © [Travis Fischer](https://github.com/transitive-bullshit)

Support my OSS work by <a href="https://twitter.com/transitive_bs">following me on twitter <img src="https://storage.googleapis.com/saasify-assets/twitter-logo.svg" alt="twitter" height="24px" align="center"></a>
