import React from 'react';

import {Layout} from 'antd';

import CustomHeader from '../features/header/Header';
import Chatbot from '../features/chatbot/Chatbot';
import { useNavigate } from 'react-router-dom';



const { Header, Content } = Layout
export default function Dashboard() {
  const navigate = useNavigate();
  const AuthToken = localStorage.getItem('token');

  if(AuthToken === "" || AuthToken === null){
    navigate('/')
  }

  return (
    <div className="">
    <Layout>
      <Header>
        {/* <CustomHeader /> */}
      </Header>
      <Content>
        <Chatbot />
      </Content>
    </Layout>
  </div>
  )
}

