import React, { Component, useContext } from 'react';
import UserContext from '../components/UserContext';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { db } from '../services/firebase';
import SignIn from '../components/SignIn';
import {connect} from 'react-redux';
import store from '../services/redux/store';
import { Form, Input, Button, Checkbox } from 'antd';
import { useRouter } from 'next/router';


export default function Login() {
    const router=useRouter();
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          (user) => {
              store.dispatch(signInEmail(user.email));
              store.dispatch(signInPhotoUrl(user.photourl));
              store.dispatch(signInUid(user.uid));
              store.dispatch(signInUsername(user.displayName));
          }
          router.push("/home");
        }
      });
      const onFinish = values => {
        console.log('Received values of form: ', values);
      };
      
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
  
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
  
        <Form.Item>
          <Button type="primary" onClick={submitOnClick} htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
  function submitOnClick(email, password){
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      // Handle Errors here.
      console.log(error.code);
      console.log(error.message);
      // ...
    });
  }
