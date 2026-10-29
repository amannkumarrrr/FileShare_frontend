import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080',
        changeOrigin: true,
        secure: false,
        ws: true,
        configure: (proxy, _options) => {
          proxy.on('error', (err, _req, res) => {
            console.error('[vite proxy error]', err.message);
            if (res && !res.headersSent && 'writeHead' in res) {
              res.writeHead(502, {
                'Content-Type': 'application/json',
              });
              res.end(JSON.stringify({
                status: 502,
                error: 'Bad Gateway',
                message: 'Unable to connect to Zero-Trust Spring Boot backend at http://127.0.0.1:8080. Ensure the backend server is running.'
              }));
            }
          });
        }
      }
    }
  }
});
