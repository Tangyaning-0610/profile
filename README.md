# Astro 个人作品集首页
这套方案采用组件化架构 + 原生 CSS，无第三方依赖，开箱即用，深色极简风格适配桌面 / 移动端，适合开发者、设计师搭建个人作品集。

## 一、项目结构
```plaintext
your-portfolio/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro   # 全局基础布局
│   ├── components/
│   │   ├── Navbar.astro       # 顶部导航
│   │   ├── Hero.astro         # 首屏介绍
│   │   ├── Projects.astro     # 作品展示
│   │   ├── About.astro        # 关于我
│   │   ├── Skills.astro       # 技能栈
│   │   ├── Contact.astro      # 联系方式
│   │   └── Footer.astro       # 页脚
│   └── pages/
│       └── index.astro        # 首页入口
├── public/                    # 存放头像、作品封面等静态资源
└── astro.config.mjs           # Astro 配置文件
```