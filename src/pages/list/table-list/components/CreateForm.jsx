import { Form, Input, Modal } from 'antd';
import React from 'react';
const FormItem = Form.Item;

const CreateForm = props => {
  const { modalVisible, form, handleAdd, handleModalVisible } = props;

  const okHandle = () => {
    form.validateFields((err, fieldsValue) => {
      if (err) return;
      form.resetFields();
      handleAdd(fieldsValue);
    });
  };

  return (
    <Modal
      destroyOnClose
      title="新建规则"
      visible={modalVisible}
      onOk={okHandle}
      onCancel={() => handleModalVisible()}
    >
      <FormItem
        labelCol={{
          span: 5,
        }}
        wrapperCol={{
          span: 15,
        }}
        label="描述"
      >
        {form.getFieldDecorator('desc', {
          rules: [
            {
              required: true,
              message: '请输入至少五个字符的规则描述！',
              min: 5,
            },
          ],
        })(<Input placeholder="请输入" />)}
      </FormItem>
    </Modal>
  );
};

export default CreateForm;
