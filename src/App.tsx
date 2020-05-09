import React from 'react';

import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { Layout } from 'antd';
import styled from 'styled-components';

import Menu from '@/Menu';

const { Content, Footer, Sider } = Layout;

const MySider = styled(Sider)`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
`;

const ContentLayout = styled(Layout)`
  margin-left: 410px;
  background: #fff;
`;

const MyContent = styled(Content)`
  margin: 24px 16px 0;
  overflow: initial;
`;

const MyFooter = styled(Footer)`
  text-align: center;
`;

export default (props: RouteConfigComponentProps) => {
  const { route } = props;
  return (
    <Layout>
      <MySider theme='light' width={410}>
        <div className='logo' />
        <Menu />
      </MySider>

      <ContentLayout>
        <MyContent>{renderRoutes(route?.routes)}</MyContent>
        <MyFooter>code@Eric design@Luna</MyFooter>
      </ContentLayout>
    </Layout>
  );
};
