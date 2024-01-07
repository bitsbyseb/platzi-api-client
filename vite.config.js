import { defineConfig } from 'vite'

export default defineConfig({
  base:'/platzi-api-client/',
  build:{
    cssMinify:true,
    minify:true,
  }
});