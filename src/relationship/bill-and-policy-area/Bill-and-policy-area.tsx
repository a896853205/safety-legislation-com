import React, { useState, useCallback } from 'react';

import { Breadcrumb, Typography, Tabs } from 'antd';
import styled from 'styled-components';
import { SwapRightOutlined, SwapLeftOutlined } from '@ant-design/icons';

import BillInput from '@/components/bill-input/Bill-input';
import BPTableFetch from './components/BP-table-fetch';
import PBStatisticsFetch from './components/PB-statistics-fetch';
import PBTableFetch from './components/PB-table-fetch';
import PolicyAreaSelectFetch from '@/components/policy-area-select-fetch/Policy-area-select-fetch';

const { Title } = Typography;
const { TabPane } = Tabs;

const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

export default () => {
  const [policyArea, setPolicyArea] = useState('');
  const [billNumber, setBillNumber] = useState('');
  const [billCongress, setBillCongress] = useState(0);

  return (
    <>
      <MarginBottom>
        <Breadcrumb>
          <Breadcrumb.Item>关联关系预览</Breadcrumb.Item>
          <Breadcrumb.Item>&lt;法案实例，政策领域&gt;</Breadcrumb.Item>
        </Breadcrumb>
      </MarginBottom>
      <MarginBottom>
        <Title>&lt;法案实例，政策领域&gt;</Title>
      </MarginBottom>
      <Tabs defaultActiveKey='1' tabPosition='left'>
        <TabPane
          tab={
            <span>
              法案实例 <SwapRightOutlined />
              政策领域
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
          <BPTableFetch billNumber={billNumber} billCongress={billCongress} />
        </TabPane>
        <TabPane
          tab={
            <span>
              法案实例 <SwapLeftOutlined />
              政策领域
            </span>
          }
          key='2'>
          <MarginBottom>
            <PolicyAreaSelectFetch
              onPolicyAreaChange={(policyArea: string) => {
                setPolicyArea(policyArea);
              }}
            />
          </MarginBottom>
          <MarginBottom>
            <PBStatisticsFetch policyArea={policyArea} />
          </MarginBottom>
          <PBTableFetch policyArea={policyArea} />
        </TabPane>
      </Tabs>
    </>
  );
};
