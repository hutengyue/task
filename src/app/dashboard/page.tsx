'use client';

import { useEffect } from 'react';
import { Card, Row, Col, Statistic } from 'antd';
import { UserOutlined, ProjectOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';

export default function DashboardPage() {
  useEffect(() => {
    // 初始化数据库
    fetch('/api/db').catch(console.error);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">仪表盘</h1>
      
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="团队成员"
              value={12}
              prefix={<UserOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="进行中的项目"
              value={8}
              prefix={<ProjectOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="已完成任务"
              value={156}
              prefix={<CheckCircleOutlined />}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="待处理任务"
              value={23}
              prefix={<ClockCircleOutlined />}
            />
          </Card>
        </Col>
      </Row>

      <div className="mt-6">
        <Row gutter={16}>
          <Col span={16}>
            <Card title="最近活动" className="h-96">
              <p className="text-gray-500">暂无活动记录</p>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="待办事项" className="h-96">
              <p className="text-gray-500">暂无待办事项</p>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}