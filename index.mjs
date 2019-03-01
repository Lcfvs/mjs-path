import path from 'path'
import curryable from '@lcf.vs/curryable'
import object from '@lcf.vs/object'
import fixWin32 from './fixWin32'

const methods = object(object(), {
  /**
   * A function to get the filename from an import.meta
   * @param {string} meta
   * @return {string}
   */
  filename: function filename (meta) {
    return path.normalize(fixWin32(decodeURI(new URL(meta.url).pathname)))
  },
  /**
   * A curryable function to resolve some paths from an import.meta directory
   * @param {string} meta
   * @param {...string} [to]
   * @return {string}
   */
  resolve: curryable(function resolve (meta, ...to) {
    return path.join(path.dirname(methods.filename(meta)), ...to)
  })
})

export default methods
