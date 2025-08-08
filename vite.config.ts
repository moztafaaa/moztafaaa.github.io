import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { componentTagger } from 'lovable-tagger';

export default defineConfig({
  plugins: [react()],
  base: '/', // Use '/' since you're using a custom domain
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
