// // vite.config.js
import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite configuration options...
  plugins : [react()],
  server: {
    // Ensure that the server fallback is set to index.html
    // This allows React Router to handle the routing on the client-side
    fs: {
      strict: false,
    },
    historyApiFallback: true,
  },
});
