import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

const input = 'src/index.js'
const isDev = process.env.NODE_ENV === 'development'
const plugins = [!isDev && terser({ keep_fnames: true }), babel()]

const config = {
  input,
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true, exports: 'named' },
    { file: pkg.module, format: 'es', sourcemap: true, exports: 'named' }
  ],
  plugins: plugins
}

const umdConfig = {
  input,
  output: {
    file: pkg.browser,
    format: 'umd',
    name: 'countryFlag',
    sourcemap: true,
    exports: 'named'
  },
  plugins: plugins
}

export default [config, umdConfig]
