import React from 'react';

import { Spin } from 'antd';
import styled from 'styled-components';

const LoadingBox = styled.div`
  width: 100%;
  padding: 30vh 0;
  text-align: center;
`;

export default () => {
  return (
    <LoadingBox>
      <Spin size='large' />
    </LoadingBox>
  );
};
