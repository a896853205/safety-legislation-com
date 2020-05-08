import React, { useState, useEffect } from 'react';
import { Breadcrumb, Typography, Space, Statistic } from 'antd';
import styled from 'styled-components';

import PersonSelectFetch from '@components/person-select-fetch/Person-select-fetch';
import SCTableFetch from './components/SC-table-fetch';

const { Title } = Typography;

const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

export default () => {
  const [personUuid, setPersonUuid] = useState('');
  const [relativeBillNum, setRelativeBillNum] = useState(0);

  useEffect(() => {
    if (personUuid) {
      // axios 调用返回一些总结数据
      setRelativeBillNum(10);
    }
  }, [personUuid]);

  return (
    <>
      <MarginBottom>
        <Breadcrumb>
          <Breadcrumb.Item>关联关系预览</Breadcrumb.Item>
          <Breadcrumb.Item>
            &lt;基本角色实例，基本角色关系类型，基本角色实例&gt;
          </Breadcrumb.Item>
        </Breadcrumb>
      </MarginBottom>
      <MarginBottom>
        <Title>&lt;基本角色实例，基本角色关系类型，基本角色实例&gt;</Title>
      </MarginBottom>
      <MarginBottom>
        <PersonSelectFetch
          onUuidChange={(personUuid: string) => {
            setPersonUuid(personUuid);
          }}
        />
      </MarginBottom>
      <MarginBottom>
        <Space size='large'>
          <Statistic title='涉及到法案' value={relativeBillNum} />
          <Statistic title='关系类型' value={1} />
        </Space>
      </MarginBottom>
      <SCTableFetch personUuid={personUuid} />
    </>
  );
};
