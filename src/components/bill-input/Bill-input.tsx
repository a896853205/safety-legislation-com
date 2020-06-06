import React, { useState, useEffect } from 'react';

import { Input, Select, Space, Tooltip } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const MySelect = styled(Select)`
  width: 140px;
`;
const BillInput = styled(Input)`
  width: 120px;
`;
const BILLBeforeArr = [
  'H.Amdt.',
  'H.Con.Res.',
  'H.R.',
  'H.Res.',
  'S.',
  'S.Res.',
  '',
];

interface IProp {
  onBillNumberChange: Function;
  onCongressChange: Function;
}

export default ({ onBillNumberChange, onCongressChange }: IProp) => {
  const [billNumber, setbillNumber] = useState('');
  const [billBefore, setbillBefore] = useState('');

  useEffect(() => {
    onBillNumberChange(billBefore + billNumber);
  }, [billNumber, billBefore, onBillNumberChange]);

  return (
    <Space>
      <Tooltip trigger={['focus']} title={'例如: H.R.60 114'} placement='topLeft'>
        <Input
          addonBefore={
            <MySelect
              placeholder='选择法案类型'
              onSelect={billBefore => {
                setbillBefore(`${billBefore}`);
              }}>
              {BILLBeforeArr.map(billBefore => {
                return (
                  <Option key={billBefore} value={billBefore}>
                    {billBefore}
                  </Option>
                );
              })}
            </MySelect>
          }
          placeholder='请输入法案号'
          onChange={e => setbillNumber(e.target.value)}
        />
      </Tooltip>
      <BillInput
        placeholder='国会届数'
        suffix='th'
        onChange={e => onCongressChange(e.target.value)}
      />
    </Space>
  );
};
