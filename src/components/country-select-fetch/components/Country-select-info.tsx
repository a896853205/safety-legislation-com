import React from 'react';

import { Select } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const MySelect = styled(Select)`
  width: 200px;
`;

interface IProp {
  countryBeforeArr: { value: string; name: string }[];
  onCountryTypeChange: Function;
}
export default ({ countryBeforeArr, onCountryTypeChange }: IProp) => {
  return (
    <MySelect
      placeholder='请选择输入类型'
      onSelect={countryBefore => {
        onCountryTypeChange(countryBefore);
      }}>
      {countryBeforeArr.map(countryBefore => {
        return (
          <Option key={countryBefore.value} value={countryBefore.value}>
            {countryBefore.name}
          </Option>
        );
      })}
    </MySelect>
  );
};
