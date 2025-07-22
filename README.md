# 协作任务管理应用

基于 [Next.js](https://nextjs.org) 构建的现代协作任务管理系统。

## 项目结构

```
src/
├── app/                    # App Router 路由和页面
│   ├── (auth)/            # 认证相关路由组
│   │   ├── login/         # 登录页面
│   │   └── register/      # 注册页面
│   ├── dashboard/         # 仪表盘页面
│   ├── projects/          # 项目相关页面
│   └── tasks/             # 任务相关页面
├── components/            # 共享组件
│   ├── ui/               # UI组件（按钮、输入框等）
│   ├── forms/            # 表单组件
│   └── layouts/          # 布局组件
├── lib/                   # 工具函数和配置
│   ├── utils/            # 通用工具函数
│   └── db/               # 数据库配置和查询
├── types/                 # TypeScript类型定义
└── hooks/                 # 自定义React Hooks

public/                    # 静态资源
└── images/               # 图片资源
```

## 技术栈

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Prisma (数据库 ORM)
- NextAuth.js (认证)
- React Query (数据获取和缓存)

## 主要功能

- 用户认证和授权
- 项目管理
- 任务创建和分配
- 实时协作
- 进度追踪
- 通知系统

## 开发环境设置

```bash
# 安装依赖
npm install

# 运行开发服务器
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看应用。

## 部署

本项目可以轻松部署到 [Vercel 平台](https://vercel.com/new)。

查看 [Next.js 部署文档](https://nextjs.org/docs/app/building-your-application/deploying) 了解更多部署选项。
