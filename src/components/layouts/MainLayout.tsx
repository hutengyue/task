'use client';

import { MenuFoldOutlined, MenuUnfoldOutlined, ProjectOutlined, DashboardOutlined, TeamOutlined, SettingOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme, Breadcrumb, Tabs } from 'antd';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const { Header, Sider, Content } = Layout;

export default function MainLayout({ children }: { children: React.ReactNode }) {
  // 获取当前菜单项
  const getCurrentMenuItem = (pathname: string) => {
    return menuItems.find(item => item.key === pathname);
  };

  // 默认标签页
  const defaultTabs = [
    { key: '/dashboard', label: '仪表盘' },
    { key: '/tasks', label: '任务管理' },
  ];
  const [tabs, setTabs] = useState(defaultTabs);
  const [activeTab, setActiveTab] = useState('/dashboard');

  // 处理标签页关闭
  const handleTabClose = (targetKey: string) => {
    const newTabs = tabs.filter(tab => tab.key !== targetKey);
    if (newTabs.length && targetKey === activeTab) {
      const lastTab = newTabs[newTabs.length - 1];
      setActiveTab(lastTab.key);
    }
    setTabs(newTabs);
  };
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  // 监听路由变化，更新标签页
  useEffect(() => {
    const currentItem = getCurrentMenuItem(pathname);
    if (currentItem && !tabs.find(tab => tab.key === pathname)) {
      setTabs([...tabs, { key: pathname, label: currentItem.label.props.children }]);
    }
    setActiveTab(pathname);
  }, [pathname]);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: <Link href="/dashboard">仪表盘</Link>,
    },
    {
      key: '/tasks',
      icon: <UnorderedListOutlined />,
      label: <Link href="/tasks">任务管理</Link>,
    },
    {
      key: '/projects',
      icon: <ProjectOutlined />,
      label: <Link href="/projects">项目管理</Link>,
    },
    {
      key: '/team',
      icon: <TeamOutlined />,
      label: <Link href="/team">团队成员</Link>,
    },
    {
      key: '/settings',
      icon: <SettingOutlined />,
      label: <Link href="/settings">系统设置</Link>,
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '0 16px',
            background: colorBgContainer,
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            minHeight: 64
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', height: 64 }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <Breadcrumb
              items={[
                { title: '首页' },
                { title: getCurrentMenuItem(pathname)?.label?.props?.children || '当前页面' }
              ]}
              style={{ margin: '0 16px' }}
            />
          </div>
          <Tabs
            type="editable-card"
            activeKey={activeTab}
            onChange={setActiveTab}
            items={tabs.map(tab => ({
              ...tab,
              closable: tab.key !== '/dashboard'
            }))}
            onEdit={(targetKey, action) => {
              if (action === 'remove') {
                handleTabClose(targetKey as string);
              }
            }}
            style={{ marginBottom: '-1px' }}
          />
        </Header>
        <Content
          style={{
            margin: '8px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}