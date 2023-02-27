import babel from '@rollup/plugin-babel'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import replace from '@rollup/plugin-replace'
import image from '@rollup/plugin-image'
import postcss from 'rollup-plugin-postcss'

export default {
  input: 'index.js',
  output: [
    {
      file: 'dist/DiscordButton.umd.js',
      format: 'umd',
      name: 'app',
      inlineDynamicImports: true,
    },
    {
      file: 'dist/DiscordButton.js',
      format: 'cjs',
      inlineDynamicImports: true,
    },
    {
      file: 'dist/DiscordButton.esm.js',
      format: 'esm',
      inlineDynamicImports: true,
    },
  ],
  plugins: [
    image(),
    postcss({
      extensions: ['.css'],
    }),
    peerDepsExternal(),
    nodeResolve({
      extensions: ['.js'],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    babel({
      presets: ['@babel/preset-react'],
    }),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
}
