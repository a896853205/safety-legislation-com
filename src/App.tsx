import React from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import Menu from '@src/Menu';

const { Content, Footer, Sider } = Layout;

const MySider = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
`;

const ContentLayout = styled(Layout)`
  margin-left: 256px;
  background: #fff;
`;

const MyContent = styled(Content)`
  margin: 24px 16px 0;
  overflow: initial;
`;

const MyFooter = styled(Footer)`
  text-align: center;
`;

export default () => {
  return (
    <Layout>
      <MySider theme='light' width={410}>
        <div className='logo' />
        <Menu />
      </MySider>

      <ContentLayout>
        <MyContent></MyContent>
        <MyFooter>code@Eric design@Wolf</MyFooter>
      </ContentLayout>
    </Layout>
  );
};
