import React from 'react';
import { Layout } from 'antd';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './App.css';

const { Content } = Layout;

function App() {
  return (
    <div className='min-h-screen relative'>
      <Header />
      <Content className='pb-20'>
        Content Here
      </Content>
      <Footer />
    </div>
  );
}

export default App;
