// @ts-check
// import { defineConfig } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({});


import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-portfolio.com',
  output: 'static',
  compressHTML: true,
  // 自动处理 Markdown 样式与图片
  markdown: {
    shikiConfig: { theme: 'github-dark' }
  }
});