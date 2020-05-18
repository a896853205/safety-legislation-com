import React from 'react';

import { Select } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const MySelect = styled(Select)`
  width: 200px;
`;

interface IProp {
  countryBeforeArr: string[];
  onCountryTypeChange: Function;
}
export default ({ countryBeforeArr, onCountryTypeChange }: IProp) => {
  return (
    <MySelect
      placeholder='select country input type'
      onSelect={countryBefore => {
        onCountryTypeChange(countryBefore);
      }}>
      {countryBeforeArr.map(countryBefore => {
        return (
          <Option key={countryBefore} value={countryBefore}>
            {countryBefore}
          </Option>
        );
      })}
    </MySelect>
  );
};
