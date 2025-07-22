# AntFE 开发者社区

## 🌟 项目概览

**AntFE 开发者社区** 是一个专为程序员打造的现代化技术交流平台，致力于连接全球优秀开发者，分享前沿技术、讨论编程实践、构建开源项目。在这里，每个程序员都能找到志同道合的伙伴。

---

## 🛠 技术架构

**基于模版：[nextjs-ai-starter](https://github.com/vadxq/nextjs-ai-starter)**

### 前端框架

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat&logo=next.js) ![React](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat&logo=typescript) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwind-css) ![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-000000?style=flat) ![SWR](https://img.shields.io/badge/SWR-000000?style=flat&logo=vercel) ![Next-intl](https://img.shields.io/badge/Next--intl-000000?style=flat) ![Serwist](https://img.shields.io/badge/Serwist-000000?style=flat)

---

## 📁 项目结构

```bash
antfe/
├── app/                          # Next.js App Router
│   ├── [locale]/                # 国际化路由
│   │   ├── layout.tsx           # 全局布局
│   │   ├── page.tsx             # 首页
│   │   └── ~offline/            # PWA 离线页面
│   ├── api/                     # API 路由
│   ├── manifest.ts              # PWA 清单
│   └── sw.ts                    # Service Worker
├── components/                   # React 组件
│   ├── ui/                      # Shadcn UI 组件
│   ├── layout/                  # 布局组件
│   │   ├── header.tsx           # 社区导航
│   │   ├── footer.tsx           # 页脚
│   │   └── pageLayout.tsx       # 页面布局
│   ├── provider/                # Context 提供者
│   └── themeToggle.tsx          # 主题切换
├── lib/                         # 工具库
│   ├── http/                    # HTTP 客户端
│   ├── i18n/                    # 国际化配置
│   └── utils.ts                 # 通用工具
├── locales/                     # 语言文件
│   ├── en.json                  # 英文
│   └── zh-CN.json               # 中文
└── styles/                      # 样式文件
    └── globals.css              # 全局样式（含液态玻璃效果）
```

---

## ✨ 社区功能

### 🤝 技术交流

- **技术讨论**: 参与各种编程语言和技术框架的深度讨论
- **经验分享**: 分享项目经验、最佳实践和踩坑记录
- **代码评审**: 获得社区成员的代码反馈和建议

### 🌍 开源项目

- **项目展示**: 展示你的开源项目，获得社区关注
- **协作开发**: 与其他开发者一起构建有趣的项目
- **技能提升**: 通过参与开源项目提升编程技能

### 💼 职业发展

- **面试指导**: 获取技术面试经验和建议
- **职业规划**: 与资深开发者讨论职业发展路径
- **人才推荐**: 发现优秀的工作机会和人才

### 📚 学习资源

- **技术文章**: 阅读社区成员分享的高质量技术文章
- **在线课程**: 参与社区组织的技术培训和研讨会
- **开发工具**: 发现和分享有用的开发工具和资源

---

## 🏠 个人主页

每个社区成员都可以构建自己的个人主页，这将在社区中展示。这是展示你自己的空间！

### 如何添加你的主页

1. **添加你的信息**:
   - 打开根目录中的 `me.json` 文件。
   - 添加一个包含你信息的新 JSON 对象。请参考现有格式。

   ```json
   {
     "name": "vadxq",
     "path": "vadxq",
     "description": "一个热爱编程和构建事物的开发者。",
     "avatar": "https://avatars.githubusercontent.com/u/123456789?v=4",
     "links": [
       {
         "name": "GitHub",
         "icon": "Github",
         "url": "https://github.com/vadxq"
       }
     ]
   }
   ```

2. **创建你的目录**:
   - 在 `app/(me)/` 目录中，创建一个以你的 GitHub 用户名命名的新文件夹（例如 `app/(me)/your_username/`）。
   - 这个目录完全由你管理。

3. **构建你的页面**:
   你可以完全自由地构建你的页面。这里有几个选项：
   - **Next.js 页面**: 创建一个 `page.tsx` 文件，使用 React 组件构建你的页面。
   - **iframe**: 使用 `iframe` 嵌入你现有的个人网站。
   - **MDX**: 使用 Markdown 编写你的页面内容。

我们鼓励你发挥创意，让你的个人页面独一无二！

---

## 🚀 快速开始

### 1. 环境要求

- Node.js 22+
- Git

### 2. 本地运行

```bash
# 克隆项目
git clone https://github.com/gentleman-org/antfe.git
cd antfe

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm run start
```

### 3. 开发脚本

```bash
# 代码检查和格式化
npm run lint              # 运行 ESLint + Prettier
npm run lint:pretty       # 快速格式化

# 生成变更日志
npm run log               # 基于 Git 提交生成 CHANGELOG
```

---

## 🌟 社区数据

- 🧑‍💻 **1000+** 活跃开发者
- 📝 **500+** 技术文章
- 🔧 **100+** 开源项目
- 🌍 **24/7** 社区活动

---

## 📋 发展计划

### 🎯 近期目标

- [ ] **用户系统**
  - [ ] 用户注册和登录

---

## 🤝 参与贡献

我们欢迎所有形式的贡献！

### 贡献方式

1. **代码贡献**: 修复 Bug、新增功能、性能优化
2. **文档改进**: 完善文档、翻译内容
3. **社区运营**: 组织活动、内容审核、用户支持
4. **反馈建议**: 提出改进建议、报告问题

### 贡献流程

1. Fork 项目
2. 创建功能分支
3. 提交代码
4. 创建 Pull Request
5. 代码审查
6. 合并代码

---

## 📚 相关资源

### 官方链接

- [GitHub 仓库](https://github.com/gentleman-org/antfe)
- [在线预览](https://antfe.com)
- [技术文档](https://github.com/gentleman-org/antfe/wiki)
- [问题反馈](https://github.com/gentleman-org/antfe/issues)

### 社区资源

- [Discord 群组](https://dc.antfe.com)
- [技术讨论](https://github.com/gentleman-org/antfe/discussions)

---

## 📄 开源许可

本项目基于 [Apache License 2.0](https://github.com/gentleman-org/antfe/blob/main/LICENSE) 开源。

本项目基于原始模版项目 [Apache License 2.0](https://github.com/vadxq/nextjs-ai-starter/blob/main/LICENSE) 开源。

---

## 💬 联系我们

- **项目维护者**: [@vadxq](https://github.com/vadxq)
- **Twitter**: [@vadxqDon](https://twitter.com/vadxqDon)

---

**感谢您对 AntFE 开发者社区的关注！一起构建更好的开发者生态！** 🚀
