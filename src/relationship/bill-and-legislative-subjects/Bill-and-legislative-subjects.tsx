import React, { useState, useCallback } from 'react';

import { Breadcrumb, Typography, Tabs } from 'antd';
import styled from 'styled-components';
import { SwapRightOutlined, SwapLeftOutlined } from '@ant-design/icons';

import BillInput from '@/components/bill-input/Bill-input';
import BLTableFetch from './components/BL-table-fetch';
import BLStatisticsFetch from './components/BL-statistics-fetch';
import LBStatisticsFetch from './components/LB-statistics-fetch';
import LBTableFetch from './components/LB-table-fetch';
import LegislativeSubjectsSelectFetch from '@/components/legislative-subjects-select-fetch/Legislative-subjects-select-fetch';

const { Title } = Typography;
const { TabPane } = Tabs;

const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

export default () => {
  const [legislativeSubjects, setLegislativeSubjects] = useState('');
  const [billNumber, setBillNumber] = useState('');
  const [billCongress, setBillCongress] = useState(0);

  return (
    <>
      <MarginBottom>
        <Breadcrumb>
          <Breadcrumb.Item>关联关系预览</Breadcrumb.Item>
          <Breadcrumb.Item>&lt;法案实例，立法主题&gt;</Breadcrumb.Item>
        </Breadcrumb>
      </MarginBottom>
      <MarginBottom>
        <Title>&lt;法案实例，立法主题&gt;</Title>
      </MarginBottom>
      <Tabs defaultActiveKey='1' tabPosition='left'>
        <TabPane
          tab={
            <span>
              法案实例 <SwapRightOutlined />
              立法主题
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
            <BLStatisticsFetch
              billNumber={billNumber}
              billCongress={billCongress}
            />
          </MarginBottom>
          <BLTableFetch billNumber={billNumber} billCongress={billCongress} />
        </TabPane>
        <TabPane
          tab={
            <span>
              法案实例 <SwapLeftOutlined />
              立法主题
            </span>
          }
          key='2'>
          <MarginBottom>
            <LegislativeSubjectsSelectFetch
              onLegislativeSubjectsChange={(legislativeSubjects: string) => {
                setLegislativeSubjects(legislativeSubjects);
              }}
            />
          </MarginBottom>
          <MarginBottom>
            <LBStatisticsFetch legislativeSubjects={legislativeSubjects} />
          </MarginBottom>
          <LBTableFetch legislativeSubjects={legislativeSubjects} />
        </TabPane>
      </Tabs>
    </>
  );
};
