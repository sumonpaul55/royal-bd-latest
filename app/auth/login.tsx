import type { Route } from "../+types/root";
import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from "react-router";



export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Royal bd || Furnitures" },
    { name: "description", content: "Welcome to Royalbd!" },
  ];
}


export default function Login() {
  const onFinish = (values: any) => {
    console.log("Login form submitted:", values);
    // Add your login logic here
  };
  return (
    <section className="min-h-screen bg-gray-100 w-screen flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          layout="vertical"
        >
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          {/* <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Login
            </Button>
          </Form.Item> */}
          <Link to="/dashboard" className="bg-blue-500 text-white w-full block py-1 rounded text-center font- text-xl">Login</Link>
        </Form>
        <div className="text-center mt-4">
          <a href="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </a>
          <p className="mt-2">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

