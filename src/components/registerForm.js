import { Form, Input, Select, Tooltip, Button, Space, Typography } from 'antd';

const { Option } = Select;

const RegisterForm = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);
  };

  return (
    
      
    <Form name="complex-form" onFinish={onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }} style={{backgroundColor:"blue",color:"white",width:"75%",padding:"5%30%10%20%"}}>
       <h1 style={{marginLeft:"100px"}}>Registration Form</h1>
      
      <Form.Item label="Names">
        <Space>
          <Form.Item
            name="Names"
            noStyle
            rules={[{ required: true, message: 'full names is required' }]}
          >
            <Input style={{ width: "300px" }} placeholder="Please input your full Names" />
          </Form.Item>
         
        </Space>
      </Form.Item>
      <Form.Item label="Phone number">
        <Space>
          <Form.Item
            name="phone number"
            noStyle
            rules={[{ required: true, message: 'phone number is required' }]}
          >
            <Input style={{ width: 300 }} placeholder="Please input your phone numbe" />
          </Form.Item>
         
        </Space>
      </Form.Item>
      <Form.Item label="Address">
        <Input.Group compact>
          <Form.Item
            name={['address', 'province']}
            noStyle
            rules={[{ required: true, message: 'Province is required' }]}
          >
            <Select style={{ width:300 }} placeholder="Select province">
              <Option value="Southen">Southen</Option>
              <Option value="North">North</Option>
              <Option value="West">West</Option>
              <Option value="East">East</Option>
            </Select>
          </Form.Item>
      
          
        </Input.Group>
      </Form.Item>
      <Form.Item label="Blood Group">
        <Input.Group compact>
          <Form.Item
            name={['Blood Group', 'group name']}
            noStyle
            rules={[{ required: true, message: 'group name is required' }]}
          >
            <Select style={{ width:300 }} placeholder="Select group name ">
              <Option value="A positive">A positive</Option>
              <Option value="B positive">B positive</Option>
            </Select>
          </Form.Item>
      
          
        </Input.Group>
      </Form.Item>
      <Form.Item label="BirthDate" style={{ marginBottom: 0 }}>
        <Form.Item
          name="birth date"
          rules={[{ required: true }]}
          
        >
          <Input style={{ width:300 }} placeholder="Input birth date" />
        </Form.Item>
        
      </Form.Item>
      
      <Form.Item label="Password" style={{ marginBottom: 0 }}>
        <Form.Item
          name="password"
          rules={[{ required: true }]}
          
        >
          <Input style={{ width:300 }} placeholder="Input valid password" />
        </Form.Item>
        
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
      
    </Form>
    
  );
};

export default RegisterForm;