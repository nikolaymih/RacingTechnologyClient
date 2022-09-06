import { Routes, Route } from 'react-router-dom';

import HeaderApp from './pages/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Main from './pages/Main/Main';
import FooterApp from './pages/Footer/Footer';
import FooterCopyRight from './pages/FooterCopyRight/FooterCopyRight';
import CreateBlogPost from './pages/CreateBlogPost/CreateBlogPost';
import PrivateGuard from './pages/PrivateGuard/PrivateGuard';

import Profile from './pages/Profile/Profile';
import CarServices from './pages/CarServices/Services';

import { Layout } from 'antd';
import './App.scss';

import PublicGuard from './pages/PublicGuard/PublicGuard';
import Appointment from './pages/Appointment/Appointment';
import ShoppingCart from "./pages/ShoppingCard/ShoppingCart";
import StripeContainer from "./pages/Stripe/StripeContainer/StripeContainer";
import Shop from "./pages/Shop/Shop";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import ShopProductDetails from "./pages/Shop/ShopProductDetails/ShopProductDetails";

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
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<ShopProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/createBlogPost" element={
            <PrivateGuard>
              <CreateBlogPost />
            </PrivateGuard>
          } />
          <Route path="/createProduct" element={
            <PrivateGuard>
              <CreateProduct />
            </PrivateGuard>
          } />
          <Route path="/profile" element={
            <PrivateGuard>
              <Profile />
            </PrivateGuard>
          } />
          <Route path="/checkoutPayment" element={
            <PublicGuard >
              <StripeContainer />
            </PublicGuard>
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

