import { Routes, Route } from 'react-router-dom';

import HeaderApp from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './components/Main/Main';

import { Layout } from 'antd';
import './App.css';
import FooterApp from './components/Footer/Footer';
import FooterCopyRight from './components/FooterCopyRight/FooterCopyRight';

function App() {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout className="layout">
      <Header style={{ background: 'none', height: '180px', padding: '0px', backgroundColor: 'white' }}>
        <HeaderApp />
      </Header>
      <Content>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: 'center', padding: 0 }}>
        <FooterApp />
        <FooterCopyRight />
      </Footer>
    </Layout>
  );
}

export default App;

