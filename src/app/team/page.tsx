'use client';

import { Card, Avatar, Button, Tag, Space, Table } from 'antd';
import { PlusOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function TeamPage() {
  // 示例数据
  const members = [
    {
      id: 1,
      name: '张三',
      role: '项目经理',
      email: 'zhangsan@example.com',
      phone: '13800138000',
      projects: ['协作任务管理系统', '客户关系管理系统'],
      tasks: { completed: 45, ongoing: 5 }
    },
    {
      id: 2,
      name: '李四',
      role: '前端开发',
      email: 'lisi@example.com',
      phone: '13800138001',
      projects: ['协作任务管理系统'],
      tasks: { completed: 32, ongoing: 3 }
    },
  ];

  const columns = [
    {
      title: '成员',
      dataIndex: 'name',
      key: 'name',
      render: (text: string) => (
        <div className="flex items-center space-x-3">
          <Avatar>{text[0]}</Avatar>
          <span>{text}</span>
        </div>
      ),
    },
    {
      title: '角色',
      dataIndex: 'role',
      key: 'role',
      render: (role: string) => <Tag color="blue">{role}</Tag>,
    },
    {
      title: '联系方式',
      key: 'contact',
      render: (_: any, record: any) => (
        <Space>
          <span><MailOutlined /> {record.email}</span>
          <span><PhoneOutlined /> {record.phone}</span>
        </Space>
      ),
    },
    {
      title: '参与项目',
      dataIndex: 'projects',
      key: 'projects',
      render: (projects: string[]) => (
        <Space wrap>
          {projects.map(project => (
            <Tag key={project} color="green">{project}</Tag>
          ))}
        </Space>
      ),
    },
    {
      title: '任务统计',
      key: 'tasks',
      render: (_: any, record: any) => (
        <Space>
          <Tag color="green">已完成: {record.tasks.completed}</Tag>
          <Tag color="blue">进行中: {record.tasks.ongoing}</Tag>
        </Space>
      ),
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: any) => (
        <Space size="middle">
          <Link href={`/team/${record.id}`} className="text-blue-600 hover:text-blue-800">
            查看详情
          </Link>
          <a className="text-blue-600 hover:text-blue-800">编辑</a>
        </Space>
      ),
    },
  ];

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">团队成员</h1>
          <p className="text-gray-500 mt-1">管理团队成员和权限</p>
        </div>
        <Link href="/team/invite">
          <Button type="primary" icon={<PlusOutlined />}>
            邀请成员
          </Button>
        </Link>
      </div>

      <Card>
        <Table
          columns={columns}
          dataSource={members}
          rowKey="id"
          pagination={{
            total: 100,
            pageSize: 10,
            current: 1,
          }}
        />
      </Card>
    </div>
  );
}