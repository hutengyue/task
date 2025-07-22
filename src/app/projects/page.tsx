'use client';

import { Card, Button, Progress, Space, Tag, Avatar } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function ProjectsPage() {
  // 示例数据
  const projects = [
    {
      id: 1,
      name: '协作任务管理系统',
      description: '一个高效的团队协作任务管理平台',
      progress: 75,
      status: 'active',
      members: ['张三', '李四', '王五'],
      tasks: { total: 24, completed: 18 }
    },
    {
      id: 2,
      name: '客户关系管理系统',
      description: '企业级CRM解决方案',
      progress: 30,
      status: 'active',
      members: ['赵六', '钱七'],
      tasks: { total: 36, completed: 12 }
    },
  ];

  const getStatusTag = (status: string) => {
    const statusMap = {
      active: { color: 'green', text: '进行中' },
      paused: { color: 'orange', text: '已暂停' },
      completed: { color: 'blue', text: '已完成' }
    };
    const { color, text } = statusMap[status as keyof typeof statusMap] || { color: 'default', text: '未知' };
    return <Tag color={color}>{text}</Tag>;
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">项目管理</h1>
          <p className="text-gray-500 mt-1">管理和跟踪所有项目进度</p>
        </div>
        <Link href="/projects/create">
          <Button type="primary" icon={<PlusOutlined />}>
            新建项目
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map(project => (
          <Card key={project.id} hoverable className="h-full">
            <div className="flex justify-between items-start mb-4">
              <div>
                <Link 
                  href={`/projects/${project.id}`}
                  className="text-xl font-medium text-blue-600 hover:text-blue-800"
                >
                  {project.name}
                </Link>
                <p className="text-gray-500 mt-1">{project.description}</p>
              </div>
              {getStatusTag(project.status)}
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-2">
                <span>项目进度</span>
                <span>{project.progress}%</span>
              </div>
              <Progress percent={project.progress} status="active" />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Avatar.Group max={{ count: 3 }}>
                  {project.members.map((member, index) => (
                    <Avatar key={index}>{member[0]}</Avatar>
                  ))}
                </Avatar.Group>
                <span className="text-gray-500">{project.members.length} 成员</span>
              </div>
              <Space>
                <Tag color="blue">{project.tasks.completed}/{project.tasks.total} 任务</Tag>
              </Space>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}