import React, { useState } from 'react';
import { Breadcrumb, Typography } from 'antd';
import styled from 'styled-components';

import PersonSelectFetch from '@components/person-select-fetch/Person-select-fetch';
import SCStatisticsFetch from './components/SC-statistics-fetch';
import SCTableFetch from './components/SC-table-fetch';

const { Title } = Typography;

const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

export default () => {
  const [personUuid, setPersonUuid] = useState('');

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
        <SCStatisticsFetch personUuid={personUuid} />
      </MarginBottom>
      <SCTableFetch personUuid={personUuid} />
    </>
  );
};
