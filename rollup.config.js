import typescript from '@rollup/plugin-typescript'
import postcss from 'rollup-plugin-postcss'
import { dts } from 'rollup-plugin-dts'

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.esm.js',
        format: 'es',
        sourcemap: true,
      },
    ],
    external: ['react', 'react/jsx-runtime'],
    plugins: [
      postcss({
        modules: false,
        inject: true,
        extract: 'index.css',
        minimize: true,
        extensions: ['.css'],
      }),
      typescript({
        tsconfig: './tsconfig.json',
      }),
    ],
  },
  {
    input: 'dist/index.d.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    external: [/\.(sass|scss|css)$/],
    plugins: [dts()],
  },
]
