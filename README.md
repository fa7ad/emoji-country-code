# emoji-country-code
Transform ISO 3166-1 country codes to Emoji flags

## Installation

Installation is the same as any other npm module.
```bash
yarn add emoji-country-code
```

or

```bash
npm install --save emoji-country-code
```

## Usage

In an ES6+ environment you can either import the named export
```js
import { fromCountryCode } from 'emoji-country-code'
```

or use the default export
```js
import flagEmoji from 'emoji-country-code'
```

CommonJS and UMD builds are available as well.

## API

To transform a country code like `BD` to `🇧🇩`, just call the `fromCountryCode` function
```js
const flag = flagEmoji.fromCountryCode('BD') //=> 🇧🇩
```

That's about it! Use it however you like 🚀

---
This project follows  
[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
