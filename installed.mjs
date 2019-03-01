import module from 'module'
import path from 'path'
import curryable from '@lcf.vs/curryable'
import object from '@lcf.vs/object'
import meta from './'
import fixWin32 from './fixWin32'

const require = module.createRequireFromPath(meta.filename(import.meta))
const resolve = require.resolve.bind(require)

const methods = object(object(), {
  /**
   * A function to get the filename from an installed/native module name
   * @param {string} name
   * @return {string}
   */
  filename: function filename (name) {
    return path.normalize(fixWin32(resolve(name)))
  },
  /**
   * A curryable function to resolve some paths from an installed/native module
   *   directory
   * @param {string} meta
   * @param {...string} [to]
   * @return {string}
   */
  resolve: curryable(function resolve (name, ...to) {
    return path.join(path.dirname(methods.filename(name)), ...to)
  })
})

export default methods
