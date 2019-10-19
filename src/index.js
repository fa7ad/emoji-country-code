import { toUpper, shiftCodePoint, charMap, codePointToString } from './utils'

const toEmoji = charMap(shiftCodePoint(0x1f1a5))

export const fromCountryCode = code => codePointToString(toEmoji(toUpper(code)))

export default { fromCountryCode }
