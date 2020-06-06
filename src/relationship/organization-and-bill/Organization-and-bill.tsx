import React, { useState, useCallback } from 'react';

import { Breadcrumb, Typography, Tabs } from 'antd';
import styled from 'styled-components';
import { DoubleRightOutlined } from '@ant-design/icons';

import BillInput from '@/components/bill-input/Bill-input';
import BOStatisticsFetch from './components/BO-statistics-fetch';
import BOTableFetch from './components/BO-table-fetch';
import OBStatisticsFetch from './components/OB-statistics-fetch';
import OBTableCommitteeFetch from './components/OB-table-committee-fetch';
import OBTableConstraintFetch from './components/OB-table-constraint-fetch';
import OBTableExecutorFetch from './components/OB-table-executor-fetch';
import OBTableRelatedObjectFetch from './components/OB-table-related-object-fetch';
import OrganizationSelectFetch from '@/components/organization-select-fetch/Organization-select-fetch';
import PersonSelectFetch from '@components/person-select-fetch/Person-select-fetch';
import SCStatisticsFetch from './components/SC-statistics-fetch';
import SCTableFetch from './components/SC-table-fetch';

const { Title } = Typography;
const { TabPane } = Tabs;

const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

export default () => {
  const [personUuid, setPersonUuid] = useState('');
  const [organizationUuid, setOrganizationUuid] = useState('');
  const [billNumber, setBillNumber] = useState('');
  const [billCongress, setBillCongress] = useState(0);

  return (
    <>
      <MarginBottom>
        <Breadcrumb>
          <Breadcrumb.Item>关联关系预览</Breadcrumb.Item>
          <Breadcrumb.Item>
            &lt;基本角色实例，基本角色类型，法案实例&gt;
          </Breadcrumb.Item>
        </Breadcrumb>
      </MarginBottom>
      <MarginBottom>
        <Title>&lt;基本角色实例，基本角色类型，法案实例&gt;</Title>
      </MarginBottom>
      <Tabs defaultActiveKey='1' tabPosition='left'>
        <TabPane
          tab={
            <span>
              提出者 <DoubleRightOutlined />
              法案实例
            </span>
          }
          key='3'>
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
        </TabPane>
        <TabPane
          tab={
            <span>
              组织 <DoubleRightOutlined />
              法案实例
            </span>
          }
          key='1'>
          <MarginBottom>
            <OrganizationSelectFetch
              onUuidChange={(organizationUuid: string) => {
                setOrganizationUuid(organizationUuid);
              }}
            />
          </MarginBottom>
          <MarginBottom>
            <OBStatisticsFetch organizationUuid={organizationUuid} />
          </MarginBottom>
          <Tabs defaultActiveKey='1' tabPosition='left'>
            <TabPane tab='管理者' key='1'>
              <OBTableCommitteeFetch organizationUuid={organizationUuid} />
            </TabPane>
            <TabPane tab='执行者' key='2'>
              <OBTableExecutorFetch organizationUuid={organizationUuid} />
            </TabPane>
            <TabPane tab='约束对象' key='3'>
              <OBTableConstraintFetch organizationUuid={organizationUuid} />
            </TabPane>
            <TabPane tab='相关对象' key='4'>
              <OBTableRelatedObjectFetch organizationUuid={organizationUuid} />
            </TabPane>
          </Tabs>
        </TabPane>
        <TabPane
          tab={
            <span>
              法案实例 <DoubleRightOutlined />
              基本角色实例
            </span>
          }
          key='2'>
          <MarginBottom>
            <BillInput
              onBillNumberChange={useCallback((billNumber: string) => {
                setBillNumber(billNumber);
              }, [])}
              onCongressChange={(billCongress: number) => {
                setBillCongress(billCongress);
              }}
            />
          </MarginBottom>
          <MarginBottom>
            <BOStatisticsFetch
              billNumber={billNumber}
              billCongress={billCongress}
            />
          </MarginBottom>
          <BOTableFetch billNumber={billNumber} billCongress={billCongress} />
        </TabPane>
      </Tabs>
    </>
  );
};
