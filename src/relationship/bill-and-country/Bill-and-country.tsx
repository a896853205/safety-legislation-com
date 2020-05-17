import React, { useState, useCallback } from 'react';

import { Breadcrumb, Typography, Tabs } from 'antd';
import styled from 'styled-components';
import { SwapRightOutlined, SwapLeftOutlined } from '@ant-design/icons';

import BillInput from '@/components/bill-input/Bill-input';
import BCTableFetch from './components/BC-table-fetch';
import CBStatisticsFetch from './components/CB-statistics-fetch';
import CBTableFetch from './components/CB-table-fetch';
import CountrySelectFetch from '@/components/country-select-fetch/Country-select-fetch';

const { Title } = Typography;
const { TabPane } = Tabs;

const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

export default () => {
  const [countryType, setcountryType] = useState('');
  const [countryUuid, setCountryUuid] = useState('');
  const [billNumber, setBillNumber] = useState('');
  const [billCongress, setBillCongress] = useState(0);

  return (
    <>
      <MarginBottom>
        <Breadcrumb>
          <Breadcrumb.Item>关联关系预览</Breadcrumb.Item>
          <Breadcrumb.Item>&lt;法案实例，覆盖地理区域&gt;</Breadcrumb.Item>
        </Breadcrumb>
      </MarginBottom>
      <MarginBottom>
        <Title>&lt;法案实例，覆盖地理区域&gt;</Title>
      </MarginBottom>
      <Tabs defaultActiveKey='1' tabPosition='left'>
        <TabPane
          tab={
            <span>
              法案实例 <SwapRightOutlined />
              覆盖地理区域
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
          <BCTableFetch billNumber={billNumber} billCongress={billCongress} />
        </TabPane>
        <TabPane
          tab={
            <span>
              法案实例 <SwapLeftOutlined />
              覆盖地理区域
            </span>
          }
          key='2'>
          <MarginBottom>
            <CountrySelectFetch
              onCountryUuidChange={(countryUuid: string) => {
                setCountryUuid(countryUuid);
              }}
              onCountryTypeChange={(countryType: string) => {
                setcountryType(countryType);
              }}
            />
          </MarginBottom>
          <MarginBottom>
            <CBStatisticsFetch
              countryUuid={countryUuid}
              countryType={countryType}
            />
          </MarginBottom>
          <CBTableFetch countryUuid={countryUuid} countryType={countryType} />
        </TabPane>
      </Tabs>
    </>
  );
};
