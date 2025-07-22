'use client';

import { Tabs, Form, Input, Button, Switch, Card, Select, Divider } from 'antd';
import { UserOutlined, LockOutlined, BellOutlined, ToolOutlined } from '@ant-design/icons';

export default function SettingsPage() {
  const [form] = Form.useForm();

  const handleSave = (values: any) => {
    console.log('保存设置:', values);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">系统设置</h1>

      <Tabs
        defaultActiveKey="profile"
        items={[
          {
            key: 'profile',
            label: (
              <span>
                <UserOutlined />
                个人资料
              </span>
            ),
            children: (
              <Card>
                <Form
                  form={form}
                  layout="vertical"
                  initialValues={{
                    name: '张三',
                    email: 'zhangsan@example.com',
                    phone: '13800138000',
                  }}
                  onFinish={handleSave}
                >
                  <Form.Item
                    label="姓名"
                    name="name"
                    rules={[{ required: true, message: '请输入姓名' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="邮箱"
                    name="email"
                    rules={[{ required: true, message: '请输入邮箱' }, { type: 'email', message: '请输入有效的邮箱地址' }]}
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item
                    label="手机号码"
                    name="phone"
                  >
                    <Input />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit">保存更改</Button>
                  </Form.Item>
                </Form>
              </Card>
            ),
          },
          {
            key: 'security',
            label: (
              <span>
                <LockOutlined />
                安全设置
              </span>
            ),
            children: (
              <Card>
                <Form layout="vertical">
                  <Form.Item label="修改密码">
                    <Button>修改密码</Button>
                  </Form.Item>

                  <Divider />

                  <Form.Item label="两步验证" extra="启用两步验证以提高账户安全性">
                    <Switch />
                  </Form.Item>

                  <Form.Item label="登录通知" extra="当有新设备登录时通过邮件通知">
                    <Switch defaultChecked />
                  </Form.Item>
                </Form>
              </Card>
            ),
          },
          {
            key: 'notifications',
            label: (
              <span>
                <BellOutlined />
                通知设置
              </span>
            ),
            children: (
              <Card>
                <Form layout="vertical">
                  <Form.Item label="任务通知">
                    <Select
                      defaultValue="all"
                      options={[
                        { value: 'all', label: '所有通知' },
                        { value: 'important', label: '仅重要通知' },
                        { value: 'none', label: '关闭通知' },
                      ]}
                    />
                  </Form.Item>

                  <Form.Item label="邮件通知">
                    <Switch defaultChecked />
                  </Form.Item>

                  <Form.Item label="站内消息">
                    <Switch defaultChecked />
                  </Form.Item>

                  <Form.Item label="项目更新提醒">
                    <Switch defaultChecked />
                  </Form.Item>
                </Form>
              </Card>
            ),
          },
          {
            key: 'preferences',
            label: (
              <span>
                <ToolOutlined />
                偏好设置
              </span>
            ),
            children: (
              <Card>
                <Form layout="vertical">
                  <Form.Item label="语言">
                    <Select
                      defaultValue="zh_CN"
                      options={[
                        { value: 'zh_CN', label: '简体中文' },
                        { value: 'en_US', label: 'English' },
                      ]}
                    />
                  </Form.Item>

                  <Form.Item label="时区">
                    <Select
                      defaultValue="Asia/Shanghai"
                      options={[
                        { value: 'Asia/Shanghai', label: '(GMT+8:00) 北京' },
                        { value: 'America/New_York', label: '(GMT-5:00) 纽约' },
                        { value: 'Europe/London', label: '(GMT+0:00) 伦敦' },
                      ]}
                    />
                  </Form.Item>

                  <Form.Item label="深色模式">
                    <Switch />
                  </Form.Item>
                </Form>
              </Card>
            ),
          },
        ]}
      />
    </div>
  );
}