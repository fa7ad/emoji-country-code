import test from 'ava'

import emojiFlag from '../src'

test("Transform 'US' => 🇺🇸", t => {
  const emoji = emojiFlag.fromCountryCode('US')
  t.is(emoji, '🇺🇸')
})

test("Transform 'us' => 🇺🇸", t => {
  const emoji = emojiFlag.fromCountryCode('US')
  t.is(emoji, '🇺🇸')
})

test("Transform 'uS' => 🇺🇸", t => {
  const emoji = emojiFlag.fromCountryCode('US')
  t.is(emoji, '🇺🇸')
})

test("Transform 'Us' => 🇺🇸", t => {
  const emoji = emojiFlag.fromCountryCode('US')
  t.is(emoji, '🇺🇸')
})
