'use client';

import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Input, Select, Space, Tag } from 'antd';
import Link from 'next/link';
import { useState } from 'react';

export default function TasksPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [priorityFilter, setPriorityFilter] = useState('all');

  // 模拟任务数据
  const tasks = [
    {
      id: 1,
      title: '完成项目文档',
      description: '编写详细的项目文档，包括架构设计和API文档',
      status: 'pending',
      priority: 'high',
      dueDate: '2024-02-01',
    },
    // 可以添加更多任务数据
  ];

  const getStatusTag = (status: string) => {
    const statusMap = {
      pending: { color: 'blue', text: '待处理' },
      in_progress: { color: 'orange', text: '进行中' },
      completed: { color: 'green', text: '已完成' },
    };
    const { color, text } = statusMap[status as keyof typeof statusMap] || { color: 'default', text: '未知' };
    return <Tag color={color}>{text}</Tag>;
  };

  const getPriorityTag = (priority: string) => {
    const priorityMap = {
      low: { color: 'green', text: '低' },
      medium: { color: 'orange', text: '中' },
      high: { color: 'red', text: '高' },
    };
    const { color, text } = priorityMap[priority as keyof typeof priorityMap] || { color: 'default', text: '未知' };
    return <Tag color={color}>{text}</Tag>;
  };

  return (
    <div className="container">
      <div className="page-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="page-title">任务列表</h1>
            <p className="page-description">管理和跟踪您的所有任务。</p>
          </div>
          <Link href="/tasks/create" passHref>
            <Button type="primary" icon={<PlusOutlined />}>
              创建任务
            </Button>
          </Link>
        </div>
      </div>

      <Card style={{ marginBottom: 24 }}>
        <Space style={{ width: '100%' }} direction="vertical" size="middle">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            <Input
              placeholder="搜索任务..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Select
              style={{ width: '100%' }}
              value={statusFilter}
              onChange={setStatusFilter}
              options={[
                { value: 'all', label: '所有状态' },
                { value: 'pending', label: '待处理' },
                { value: 'in_progress', label: '进行中' },
                { value: 'completed', label: '已完成' },
              ]}
            />
            <Select
              style={{ width: '100%' }}
              value={priorityFilter}
              onChange={setPriorityFilter}
              options={[
                { value: 'all', label: '所有优先级' },
                { value: 'low', label: '低' },
                { value: 'medium', label: '中' },
                { value: 'high', label: '高' },
              ]}
            />
          </div>
        </Space>
      </Card>

      <Space style={{ width: '100%' }} direction="vertical" size="middle">
        {tasks.map((task) => (
          <Card key={task.id} hoverable>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div>
                <h3 style={{ fontSize: 16, fontWeight: 500, marginBottom: 8 }}>{task.title}</h3>
                <p style={{ color: 'rgba(0, 0, 0, 0.45)', marginBottom: 16 }}>{task.description}</p>
              </div>
              <Space>
                {getStatusTag(task.status)}
                {getPriorityTag(task.priority)}
                <span style={{ color: 'rgba(0, 0, 0, 0.45)', fontSize: 14 }}>{task.dueDate}</span>
              </Space>
            </div>
          </Card>
        ))}
      </Space>
    </div>
  );
}