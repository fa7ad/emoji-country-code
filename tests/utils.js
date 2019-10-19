import test from 'ava'
import {
  charMap,
  toUpper,
  shiftCodePoint,
  codePointToString
} from '../src/utils'

test('toUpper: xxx => XXX', t => {
  t.is('XXX', toUpper('xxx'))
})

test("charMap(toUpper): xyz => ['X', 'Y', 'Z']", t => {
  const expected = ['X', 'Y', 'Z']
  const result = charMap(toUpper)('xyz')
  t.deepEqual(result, expected)
})

test('shiftCodePoint: 24 => a => 121', t => {
  t.is(121, shiftCodePoint(24)('a'))
})

test('codePointToString: 121 => y', t => {
  t.is('y', codePointToString([121]))
})
