import React from 'react'
import { Modal, Form, Input, Button } from 'antd';

function Addbook({ visible, onCreate, onCancel }) {
    const [form] = Form.useForm();

    const handleOk = () => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((errorInfo) => {
            alert('Validation failed:', errorInfo);
          });
      };
    
      return (
        <Modal
          visible={visible}
          title="Add Book"
          onCancel={onCancel}
          footer={[
            <Button key="cancel" onClick={onCancel}>
              Cancel
            </Button>,
            <Button key="add" type="primary" onClick={handleOk}>
              Add
            </Button>,
          ]}
        >
          <Form
            form={form}
            layout="vertical"
            name="addBookForm"
          
          >
            <Form.Item
              name="title"
              label="Title"
              rules={[
                {
                  required: true,
                  message: 'Please enter the title of the book',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="author"
              label="Author"
              rules={[
                {
                  required: true,
                  message: 'Please enter the author of the book',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="price"
              label="Price"
              rules={[
                {
                  required: true,
                  message: 'Please enter the price of the book',
                },
              ]}
            >
              <Input type="number" />
            </Form.Item>
          </Form>
        </Modal>
      );
    };


export default Addbook