# Astro 个人作品集首页
这套方案采用组件化架构 + 原生 CSS，无第三方依赖，开箱即用，深色极简风格适配桌面 / 移动端，适合开发者、设计师搭建个人作品集。

## 一、项目结构
```plaintext
operation-profile/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro   # 全局基础布局
│   ├── components/
│   │   ├── Navbar.astro       # 顶部导航
│   │   ├── Hero.astro         # 首屏个人定位
│   │   ├── Stats.astro        # 核心数据成果看板
│   │   ├── WorksList.astro    # 案例卡片列表
│   │   ├── Skills.astro       # 运营能力栈
│   │   ├── About.astro        # 关于我/方法论
│   │   ├── Contact.astro      # 联系方式
│   │   └── Footer.astro       # 页脚
│   ├── pages/
│   │   ├── index.astro        # 首页入口
│   │   └── works/
│   │       └── [...slug].astro # 案例详情页（自动路由）
│   └── content/
│       ├── config.ts          # 内容集合规则配置
│       └── works/             # 所有运营案例（纯 Markdown 编写）
│           ├── activity-01.md # 活动运营案例示例
│           └── content-01.md  # 内容运营案例示例
├── public/
│   └── works-html/            # 存放 HTML 格式作品（活动页/H5等）
│       └── activity-h5.html
└── astro.config.mjs
```