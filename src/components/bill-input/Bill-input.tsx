import React, { useState, useEffect } from 'react';

import { Input, Select, Space } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const MySelect = styled(Select)`
  width: 120px;
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
      <Input
        addonBefore={
          <MySelect
            placeholder='bill type'
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
        placeholder='number'
        onChange={e => setbillNumber(e.target.value)}
      />
      {/* TODO: input防抖处理 */}
      <BillInput
        placeholder='congress'
        suffix='th'
        onChange={e => onCongressChange(e.target.value)}
      />
    </Space>
  );
};
