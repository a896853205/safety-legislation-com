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
}
export default ({
  options,
  selectFetch,
  selectSearch,
  onUuidChange,
}: IProp) => {
  return (
    <MySelect
      allowClear
      showSearch
      showArrow={false}
      placeholder='Select users'
      notFoundContent={selectFetch ? <Spin size='small' /> : <Empty />}
      filterOption={false}
      onSearch={() => selectSearch()}
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
