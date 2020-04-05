import React, { useState, useEffect, Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 8,
  },
};

// This class allows a user to register a new account
class Register extends Component {
  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };

    const msg = "This field is required";

    return (
      <div>
        <Form
          {...layout}
          name="register"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          style={{ textAlign: "center", marginTop: 200 }}
        >
          <Form.Item
            name="username"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "That is not a valid E-mail!",
              },
              {
                required: true,
                message: "Please enter your E-mail address!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rule={[
              {
                required: true,
                message: msg,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="re-password"
            label="Confirm Password"
            rule={[
              {
                required: true,
                message: msg,
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="firstName"
            label="First Name"
            rule={[
              {
                required: true,
                message: msg,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="lastName"
            label="Last Name"
            rule={[
              {
                required: true,
                message: msg,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="city"
            label="City"
            rule={[
              {
                required: true,
                message: msg,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phoneNum"
            label="Phone Number"
            rule={[
              {
                required: true,
                message: msg,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Current Employee?">
            <Checkbox checked="">I am a current employee</Checkbox>
          </Form.Item>

          <Form.Item
            name="empId"
            label="Employee ID"
            rule={[
              {
                required: false,
                message:
                  "If you are a current employee, please enter your employee ID",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Register;
