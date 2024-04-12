<<<<<<< HEAD
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
=======
import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
>>>>>>> 239150adc6ef04318e375729c126558d37eecb7a

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
<<<<<<< HEAD
  },
});
=======
  },    
})
>>>>>>> 239150adc6ef04318e375729c126558d37eecb7a
