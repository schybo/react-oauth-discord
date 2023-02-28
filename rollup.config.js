import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'
import packageJson from './package.json'

export default {
  input: 'index.js',
  output: [
    // {
    //   file: packageJson.main,
    //   format: 'umd',
    //   name: 'app',
    //   inlineDynamicImports: true,
    // },
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: Object.keys(packageJson.dependencies || {}).concat(
    Object.keys(packageJson.peerDependencies || {})
  ),
  plugins: [
    peerDepsExternal(),
    commonjs({
      include: 'node_modules/**',
    }),
    nodeResolve({
      extensions: ['.js'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'bundled',
    }),
    image(),
    postcss({
      extensions: ['.css'],
    }),
  ],
}
