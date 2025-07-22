import 'reflect-metadata';
import type { Metadata } from "next";
import 'antd/dist/reset.css';
import "./globals.css";
import MainLayout from "@/components/layouts/MainLayout";
import { initDatabaseOnServer } from '@/lib/db';

// 初始化数据库
initDatabaseOnServer().catch(console.error);

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
