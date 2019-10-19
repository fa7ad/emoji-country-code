export const toUpper = str => str.toUpperCase()

export const charMap = fn => str => [].map.call(str, fn)

export const codePointToString = points =>
  String.fromCodePoint.apply(String, points)

export const shiftCodePoint = shift => char => char.codePointAt() + shift
