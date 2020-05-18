import React, { useState, useCallback } from 'react';

import { Breadcrumb, Typography, Tabs } from 'antd';
import styled from 'styled-components';
import { SwapRightOutlined, SwapLeftOutlined } from '@ant-design/icons';

import BillInput from '@/components/bill-input/Bill-input';
import BPOStatisticsFetch from './components/BPO-statistics-fetch';
import BPOTableFetch from './components/BPO-table-fetch';
import POBStatisticsFetch from './components/POB-statistics-fetch';
import POBTableFetch from './components/POB-table-fetch';
import PolicyOrganizationSelectFetch from '@/components/policy-organization-select-fetch/Policy-organization-select-fetch';

const { Title } = Typography;
const { TabPane } = Tabs;

const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

export default () => {
  const [policyOrganizationUuid, setPolicyOrganizationUuid] = useState('');
  const [billNumber, setBillNumber] = useState('');
  const [billCongress, setBillCongress] = useState(0);

  return (
    <>
      <MarginBottom>
        <Breadcrumb>
          <Breadcrumb.Item>关联关系预览</Breadcrumb.Item>
          <Breadcrumb.Item>&lt;法案实例，覆盖政治组织&gt;</Breadcrumb.Item>
        </Breadcrumb>
      </MarginBottom>
      <MarginBottom>
        <Title>&lt;法案实例，覆盖政治组织&gt;</Title>
      </MarginBottom>
      <Tabs defaultActiveKey='1' tabPosition='left'>
        <TabPane
          tab={
            <span>
              法案实例 <SwapRightOutlined />
              覆盖政治组织
            </span>
          }
          key='1'>
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
            <BPOStatisticsFetch
              billNumber={billNumber}
              billCongress={billCongress}
            />
          </MarginBottom>
          <BPOTableFetch billNumber={billNumber} billCongress={billCongress} />
        </TabPane>
        <TabPane
          tab={
            <span>
              法案实例 <SwapLeftOutlined />
              覆盖政治组织
            </span>
          }
          key='2'>
          <MarginBottom>
            <PolicyOrganizationSelectFetch
              onPolicyOrganizationChange={(policyOrganizationUuid: string) => {
                setPolicyOrganizationUuid(policyOrganizationUuid);
              }}
            />
          </MarginBottom>
          <MarginBottom>
            <POBStatisticsFetch
              policyOrganizationUuid={policyOrganizationUuid}
            />
          </MarginBottom>
          <POBTableFetch policyOrganizationUuid={policyOrganizationUuid} />
        </TabPane>
      </Tabs>
    </>
  );
};
