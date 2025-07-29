import type { Metadata } from "next";
import 'antd/dist/reset.css';
import "./globals.css";
import MainLayout from "@/components/layouts/MainLayout";
import { initializeDatabase } from '@/lib/db/init';

// 在服务端初始化数据库
initializeDatabase().catch(console.error);

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
