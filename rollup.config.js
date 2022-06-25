// see https://github.com/rozek/build-configuration-study

import commonjs   from '@rollup/plugin-commonjs'
import resolve    from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
  input: './src/lower-case.ts',
  output: [
    {
      file:     './src/lower-case.js',
      format:    'cjs',
      name:      'lower-case',
      noConflict:true,
      sourcemap: true,
      exports:   'auto',
      plugins:   [terser({ format:{ comments:false, safari10:true } })],
    }
  ],
  plugins: [
    resolve(), commonjs(), typescript()
  ],
};