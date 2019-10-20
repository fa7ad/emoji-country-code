import test from 'ava'
import {
  charMap,
  toUpper,
  shiftCodePoint,
  codePointToString,
  compose
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

test('compose: addOne => square => 10 => 101', t => {
  const addOne = x => x + 1
  const square = x => x ** 2
  const sqAddOne = compose(
    addOne,
    square
  )
  t.is(101, sqAddOne(10))
})
