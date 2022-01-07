import { Routes, Route } from 'react-router-dom';

import HeaderApp from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './components/Main/Main';
import FooterApp from './components/Footer/Footer';
import FooterCopyRight from './components/FooterCopyRight/FooterCopyRight';
import CreateBlogPost from './components/CreateBlogPost/CreateBlogPost';
import PrivateGuard from './components/PrivateGuard/PrivateGuard';

import Profile from './components/Profile/Profile';
import CarServices from './components/CarServices/Services';

import { Layout } from 'antd';
import './App.css';
import PublicGuard from './components/PublicGuard/PublicGuard';
import Appointment from './components/Appointment/Appointment';
import ShoppingCart from "./components/ShoppingCard/ShoppingCart";

function App() {
  const { Header, Footer, Content } = Layout;

  return (
    <Layout className="layout">
      <Header style={{ background: 'none', height: '180px', padding: '0px', backgroundColor: 'white' }}>
        <HeaderApp />
      </Header>
      <Content>
        <Routes>

          <Route path="/" element={
            <PublicGuard >
              <Main />
            </PublicGuard>
          } />
          <Route path="/services" element={
            <PublicGuard >
              <CarServices />
            </PublicGuard>
          } />
          <Route path="/shoppingCard" element={
            <PublicGuard >
              <ShoppingCart />
            </PublicGuard>
          } />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createBlogPost" element={
            <PrivateGuard>
              <CreateBlogPost />
            </PrivateGuard>
          } />
          <Route path="/profile" element={
            <PrivateGuard>
              <Profile />
            </PrivateGuard>
          } />
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

