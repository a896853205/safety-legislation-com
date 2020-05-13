import React from 'react';

import { Select, Spin, Empty } from 'antd';
import styled from 'styled-components';

const { Option } = Select;

const MySelect = styled(Select)`
  width: 240px;
`;

interface IProp {
  options: { key: string; value: string; text: string }[];
  selectFetch: boolean;
  selectSearch: Function;
  onUuidChange: Function;
  placeholder: string;
}
export default ({
  options,
  selectFetch,
  selectSearch,
  onUuidChange,
  placeholder,
}: IProp) => {
  return (
    <MySelect
      allowClear
      showSearch
      showArrow={false}
      placeholder={placeholder}
      notFoundContent={selectFetch ? <Spin size='small' /> : <Empty />}
      filterOption={false}
      onSearch={name => selectSearch(name)}
      onChange={personUuid => {
        onUuidChange(personUuid);
      }}>
      {options.map(d => (
        <Option key={d.value} value={d.value}>
          {d.text}
        </Option>
      ))}
    </MySelect>
  );
};
