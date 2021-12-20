import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import HeaderApp from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import { Layout } from 'antd';
import './App.css';

function App() {
  const { Header, Footer, Content } = Layout;

  useEffect(() => {
    
  })

  return (
    <Layout className="layout">
      <Header style={{ background: 'none', marginBottom: '6rem', padding: '0px', backgroundColor: 'white' }}>
        <HeaderApp />
      </Header>
      <Content>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Racing Technology ©2021 Created by Dancho Danchev</Footer>
    </Layout>
  );
}

export default App;

