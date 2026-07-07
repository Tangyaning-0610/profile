// @ts-check
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});


import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-portfolio.com', // 替换为你的域名
  output: 'static', // 纯静态输出，支持所有静态托管平台
  compressHTML: true,
});