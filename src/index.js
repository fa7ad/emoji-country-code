import {
  toUpper,
  shiftCodePoint,
  charMap,
  codePointToString,
  compose
} from './utils'

const mapToEmojiCodePoint = charMap(shiftCodePoint(0x1f1a5))

const convertToEmoji = compose(
  codePointToString,
  mapToEmojiCodePoint,
  toUpper
)

export const fromCountryCode = convertToEmoji

export default { fromCountryCode }
