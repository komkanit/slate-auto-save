# slate-auto-save

A [Slate](https://github.com/ianstormtaylor/slate) plugin to handle onChange event on silence without event stack. Useful for implementing auto save Editor.

## Installation
```
npm install slate-auto-save
```

## Usage
```javascript
import autoSavePlugin, { delay } from 'slate-auto-save';

const doSomeThing = (state) => {
  console.log(state);
}
const autoSaveDelay = delay(3000); //milliseconds
const plugins = [
  autoSavePlugin(doSomeThing, autoSaveDelay)
  // can use autoSavePlugin(doSomeThing) if you want delay 2000ms by default
];

// And later pass it into the Slate editor...
<Editor
  ...
  plugins={plugins}
/>
```
## Contributions
Pull requests are welcome.

## License
MIT © [komcal](https://github.com/komcal)
