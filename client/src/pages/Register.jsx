import React from "react";
import '../styles/Register.css'
import axios from 'axios'
import { Link,useNavigate } from "react-router-dom";
import { Form, Input,message } from "antd";

const Register = () => {
  const navigate=useNavigate();
  const onfinishHandler=async (values)=>{
    try {
      const res= await axios.post("/api/v1/user/register",values);
      if(res.data.success){
        message.success(`Register Successfully`)
        navigate('/login')
      }else{
        message.error(res.data.message)
      }

    } catch (error) {
      console.log(error);
      message.error(`Something went wrong`)
    }
  }
  return (
    <>
      <div className="form-container">
        <Form layout="vertical" onFinish={onfinishHandler} className='card p-4 '>
          <h2>Register</h2>
          <Form.Item
            label="Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your Name!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                message: "Please input your Email!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input type="password"/>
          </Form.Item>
          <Link to='/login'>Already User? Login</Link>
          <button className="btn btn-primary" type="submit"> Register</button>
        </Form>
      </div>
    </>
  );
};

export default Register;
