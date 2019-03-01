# <a name="reference">mjs-path</a>

An utility to resolve some mjs/installed modules paths

## <a name="install">Install</a>

`npm i @lcf.vs/mjs-path`

## <a name="usage">Usage</a>

```js
import meta from '@lcf.vs/mjs-path'
import installed from '@lcf.vs/mjs-path/installed'

const __filename = meta.filename(import.meta)
const __dirname = meta.resolve(import.meta)
const submodule = meta.resolve(import.meta, './submodule.mjs')
// Or submodule = meta.resolve.curry(import.meta)( './submodule.mjs')

const mjsPathFilename = installed.filename('@lcf.vs/mjs-path')
const mjsPathDirname = installed.resolve('@lcf.vs/mjs-path')
const mjsPathSubmodule = installed.resolve('@lcf.vs/mjs-path', './installed.mjs')
// Or mjsPathSubmodule = installed.resolve.curry('@lcf.vs/mjs-path')( './installed.mjs')
```

## <a name="api">API</a>

### <a name="imported-modules">Imported modules</a>
```js
import meta from '@lcf.vs/mjs-path'

/**
* A function to get the filename from an import.meta
* @param {string} meta
* @return {string}
*/
const filename = meta.filename(import.meta)

/**
* A curryable function to resolve some paths from an import.meta directory
* @param {string} meta
* @param {...string} [to]
* @return {string}
*/
const directory = meta.resolve(import.meta, ...to)
```

### <a name="installed-ornative-modules">Installed/native modules</a>
```js
import installed from '@lcf.vs/mjs-path/installed'

/**
* A function to get the filename from an installed/native module name
* @param {string} name
* @return {string}
*/
const filename = installed.filename(name)

/**
* A curryable function to resolve some paths from an installed/native module
*   directory
* @param {string} meta
* @param {...string} [to]
* @return {string}
*/
const directory = installed.resolve(name, ...to)
```

## <a name="license">License</a>

[MIT](https://github.com/Lcfvs/mjs-path/blob/master/licence.md)
