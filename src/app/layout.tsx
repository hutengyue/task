import type { Metadata } from "next";
import 'antd/dist/reset.css';
import "./globals.css";
import MainLayout from "@/components/layouts/MainLayout";

// 数据库初始化已移至 API 路由 /api/db

export const metadata: Metadata = {
  title: "协作任务管理系统",
  description: "一个现代化的团队协作任务管理系统",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased font-sans">
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
