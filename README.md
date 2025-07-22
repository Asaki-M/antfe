# AntFE Developer Community

## 🌟 Project Overview

**AntFE Developer Community** is a modern technology exchange platform designed for programmers, dedicated to connecting outstanding developers worldwide, sharing cutting-edge technologies, discussing programming practices, and building open-source projects. Here, every programmer can find like-minded partners.

### 🎯 Community Features

- 🚀 **Technical Exchange**: Share experiences with outstanding programmers worldwide and discuss the latest technology trends
- 🎨 **Modern Design**: Based on liquid glass design, providing an elegant user experience
- 🌍 **Multicultural**: Support multi-language communication, connecting developers from different countries and regions
- 🔧 **Open Source Spirit**: Embrace open source culture and build a better developer ecosystem together
- ⚡ **High Performance**: Built on Next.js 15, enjoy an ultimate browsing experience
- 📱 **PWA Support**: Native mobile app experience

---

## 🛠 Technical Architecture

**Based on template: [nextjs-ai-starter](https://github.com/vadxq/nextjs-ai-starter)**

### Frontend Framework

- **Next.js 15** - Latest React full-stack framework using App Router
- **React 19** - Latest React version with new features support
- **TypeScript 5.8** - Static type checking and code hints

### Styling and UI

- **Tailwind CSS 4.1** - Atomic CSS framework
- **Shadcn UI** - Component library based on Radix UI
- **Liquid Glass Design** - iOS26-style modern UI effects
- **Lucide React** - Modern icon library

### Features

- **SWR 2.3** - Data fetching and caching
- **Next-intl 4.3** - Internationalization solution
- **Next-themes 0.4** - Theme switching support
- **Serwist 9.0** - PWA and Service Worker

---

## 📁 Project Structure

```bash
antfe/
├── app/                          # Next.js App Router
│   ├── [locale]/                # Internationalization routes
│   │   ├── layout.tsx           # Global layout
│   │   ├── page.tsx             # Homepage
│   │   └── ~offline/            # PWA offline page
│   ├── api/                     # API routes
│   ├── manifest.ts              # PWA manifest
│   └── sw.ts                    # Service Worker
├── components/                   # React components
│   ├── ui/                      # Shadcn UI components
│   ├── layout/                  # Layout components
│   │   ├── header.tsx           # Community navigation
│   │   ├── footer.tsx           # Footer
│   │   └── pageLayout.tsx       # Page layout
│   ├── provider/                # Context providers
│   └── themeToggle.tsx          # Theme toggle
├── lib/                         # Utility libraries
│   ├── http/                    # HTTP client
│   ├── i18n/                    # Internationalization config
│   └── utils.ts                 # Common utilities
├── locales/                     # Language files
│   ├── en.json                  # English
│   └── zh-CN.json               # Chinese
└── styles/                      # Style files
    └── globals.css              # Global styles (with liquid glass effects)
```

---

## ✨ Community Features

### 🤝 Technical Exchange

- **Technical Discussions**: Participate in in-depth discussions on various programming languages and technology frameworks
- **Experience Sharing**: Share project experiences, best practices, and lessons learned
- **Code Reviews**: Get code feedback and suggestions from community members

### 🌍 Open Source Projects

- **Project Showcase**: Showcase your open source projects and gain community attention
- **Collaborative Development**: Build interesting projects with other developers
- **Skill Enhancement**: Improve programming skills by participating in open source projects

### 💼 Career Development

- **Interview Guidance**: Get technical interview experience and advice
- **Career Planning**: Discuss career development paths with senior developers
- **Talent Recommendations**: Discover excellent job opportunities and talent

### 📚 Learning Resources

- **Technical Articles**: Read high-quality technical articles shared by community members
- **Online Courses**: Participate in technical training and seminars organized by the community
- **Development Tools**: Discover and share useful development tools and resources

---

## 🚀 Quick Start

### 1. Requirements

- Node.js 22+
- Git

### 2. Local Development

```bash
# Clone the project
git clone https://github.com/gentleman-org/antfe.git
cd antfe

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### 3. Development Scripts

```bash
# Code checking and formatting
npm run lint              # Run ESLint + Prettier
npm run lint:pretty       # Quick formatting

# Generate changelog
npm run log               # Generate CHANGELOG based on Git commits
```

---

## 🌟 Community Statistics

- 🧑‍💻 **1000+** Active developers
- 📝 **500+** Technical articles
- 🔧 **100+** Open source projects
- 🌍 **24/7** Community activities

---

## 📋 Development Plan

### 🎯 Short-term Goals

- [ ] **User System**
  - [ ] User registration and login
  - [ ] Profile management
  - [ ] User permission system

- [ ] **Community Features**
  - [ ] Technical discussion areas
  - [ ] Article publishing system
  - [ ] Project showcase platform
  - [ ] Comments and likes functionality

- [ ] **Content Management**
  - [ ] Article editor
  - [ ] Code highlighting
  - [ ] Image upload
  - [ ] Tag system

### 🛠 Medium-term Plans

- [ ] **Advanced Features**
  - [ ] Real-time chat system
  - [ ] Video conference integration
  - [ ] Online code editor
  - [ ] AI assistant integration

- [ ] **Mobile Application**
  - [ ] Offline reading functionality
  - [ ] Push notifications

### 🔍 Long-term Vision

- [ ] **Globalization**
  - [ ] Multi-language support expansion
  - [ ] International community operations
  - [ ] Localized activities

- [ ] **Commercialization**
  - [ ] Enterprise version features
  - [ ] Paid course platform
  - [ ] Talent recruitment services

---

## 🤝 Contributing

We welcome all forms of contributions!

### Ways to Contribute

1. **Code Contributions**: Fix bugs, add features, optimize performance
2. **Documentation Improvements**: Improve documentation, translate content
3. **Community Operations**: Organize events, content moderation, user support
4. **Feedback and Suggestions**: Propose improvements, report issues

### Contribution Process

1. Fork the project
2. Create a feature branch
3. Submit code
4. Create a Pull Request
5. Code review
6. Merge code

---

## 📚 Related Resources

### Official Links

- [GitHub Repository](https://github.com/gentleman-org/antfe)
- [Online Preview](https://antfe.com)
- [Technical Documentation](https://github.com/gentleman-org/antfe/wiki)
- [Issue Feedback](https://github.com/gentleman-org/antfe/issues)

### Community Resources

- [Discord Group](https://dc.antfe.com)
- [Technical Discussions](https://github.com/gentleman-org/antfe/discussions)

---

## 📄 Open Source License

This project is open source under [Apache License 2.0](https://github.com/gentleman-org/antfe/blob/main/LICENSE).

This project is based on the original template project [Apache License 2.0](https://github.com/vadxq/nextjs-ai-starter/blob/main/LICENSE).

---

## 💬 Contact Us

- **Project Maintainer**: [@vadxq](https://github.com/vadxq)
- **Twitter**: [@vadxqDon](https://twitter.com/vadxqDon)

---

**Thank you for your attention to the AntFE Developer Community! Let's build a better developer ecosystem together!** 🚀
