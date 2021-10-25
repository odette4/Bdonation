import React from "react";
import {Form, Input, Button, Checkbox} from 'antd';
import {Link} from "react-router-dom";
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import "./index.css";





const SigninForm = () => {
return (
    <Form
     name="normal_login"
     className="login-form"
     initialValues={{remember: true}}
     
    
    >

    <Form.Item
       name="email"
       rules={[{required: true, message: 'please input your email!'}]}


    >

    <Input prefix={<UserOutlined className="site-form-item-icon"/>}placeholder="email" />
    </Form.Item>

    <Form.Item
     name="password"
     rules={[{required: true, message: 'please input your password!'}]}
    > 

    <Input
      prefix={<LockOutlined className="site-name-item-icon"/>}
      type="password"
      placeholder="Password"
    /> 

    </Form.Item>
    <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forget" href=""> 
            Forgot password
            </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    login
                    </Button>
                    or <a href=""></a>
                    <Link to ="/registerForm">register now</Link>
                    </Form.Item>
                    </Form>
);
};

export default SigninForm;