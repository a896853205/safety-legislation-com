import React, { useState, useEffect } from 'react';

import { Select, Spin, Empty, Tooltip } from 'antd';
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
  value?: string;
  tooltipValue?: string;
}
export default ({
  options,
  selectFetch,
  selectSearch,
  onUuidChange,
  placeholder,
  value,
  tooltipValue,
}: IProp) => {
  const [_value, setValue] = useState<string | undefined>(undefined);

  useEffect(() => {
    setValue(value);
  }, [value]);

  return (
    <Tooltip trigger={['hover']} title={tooltipValue} placement='topLeft'>
      <div>
        <MySelect
          value={_value}
          showSearch
          showArrow={false}
          placeholder={placeholder}
          notFoundContent={selectFetch ? <Spin size='small' /> : <Empty />}
          filterOption={false}
          onSearch={name => selectSearch(name)}
          onChange={personUuid => {
            onUuidChange(personUuid);
            setValue(`${personUuid}`);
          }}>
          {options.map(d => (
            <Option key={d.value} value={d.value}>
              {d.text}
            </Option>
          ))}
        </MySelect>
      </div>
    </Tooltip>
  );
};
