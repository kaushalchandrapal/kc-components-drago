import { defineConfig } from 'vite'
// import reactRefresh from '@vitejs/plugin-react-refresh';
import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import { peerDependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
    }),
    babel({
      exclude: 'node_modules/**',
      presets: ['@babel/preset-react']
    }),
    external(),
    resolve(),
    terser(),
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'KcComponentsDrago',
      formats: ['cjs', 'es', 'umd'],
      fileName: (format) => format === 'cjs' ? 'index.ts' : `index.${format}.ts`,
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
