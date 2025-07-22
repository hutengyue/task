'use client';

import { Button, Card, DatePicker, Form, Input, Select } from 'antd';
import { useRouter } from 'next/navigation';

const { TextArea } = Input;

export default function CreateTask() {
  const router = useRouter();
  const [form] = Form.useForm();

  const handleSubmit = async (values: any) => {
    // TODO: Implement task creation logic
    router.push('/tasks');
  };

  return (
    <div className="container">
      <div className="page-header">
        <h1 className="page-title">创建新任务</h1>
        <p className="page-description">请填写以下表单来创建新的任务。</p>
      </div>

      <Card>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            status: 'pending',
            priority: 'medium',
          }}
        >
          <Form.Item
            label="任务标题"
            name="title"
            rules={[{ required: true, message: '请输入任务标题' }]}
          >
            <Input placeholder="输入任务标题" />
          </Form.Item>

          <Form.Item
            label="任务描述"
            name="description"
          >
            <TextArea
              rows={4}
              placeholder="输入任务描述"
            />
          </Form.Item>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <Form.Item
              label="状态"
              name="status"
            >
              <Select>
                <Select.Option value="pending">待处理</Select.Option>
                <Select.Option value="in_progress">进行中</Select.Option>
                <Select.Option value="completed">已完成</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="优先级"
              name="priority"
            >
              <Select>
                <Select.Option value="low">低</Select.Option>
                <Select.Option value="medium">中</Select.Option>
                <Select.Option value="high">高</Select.Option>
              </Select>
            </Form.Item>
          </div>

          <Form.Item
            label="截止日期"
            name="dueDate"
          >
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0, textAlign: 'right' }}>
            <Button
              style={{ marginRight: 8 }}
              onClick={() => router.back()}
            >
              取消
            </Button>
            <Button type="primary" htmlType="submit">
              创建任务
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}