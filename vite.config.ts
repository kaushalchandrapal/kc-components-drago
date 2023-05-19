import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: 'src/MyComponentDemo.ts',
      name: 'MyComponentDemo',
      fileName: (format) => `my-component-demo.${format}.ts`,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
