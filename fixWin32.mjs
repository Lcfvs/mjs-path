const pattern = /^(\/)[A-Z]:/i

export default function fixWin32 (path) {
  return path.replace(pattern, '')
}
