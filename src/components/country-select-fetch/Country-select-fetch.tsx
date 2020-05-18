import React, { useState } from 'react';

import axios from 'axios';
import { Space } from 'antd';
import debounce from 'lodash.debounce';

import * as APIS from '@constants/api-constants';
import CountrySelectInfo from './components/Country-select-info';
import SelectInfo from '../select-info/Select-info';

const countryBeforeArr = [
  'countryName',
  'countryFullName',
  'territory',
  'territoryDetail',
];

interface IProp {
  onCountryTypeChange: Function;
  onCountryUuidChange: Function;
  countryType?: string;
  countryUuid?: string;
}

interface ISelectOption {
  key: string;
  value: string;
  text: string;
}

export default ({
  onCountryTypeChange,
  onCountryUuidChange,
  countryType,
  countryUuid,
}: IProp) => {
  const [options, setOptions] = useState<ISelectOption[]>([]);
  const [selectFetch, setSelectFetch] = useState(false);

  const optionDataPack = (
    data: { uuid: string; name: string }[]
  ): ISelectOption[] => {
    return data.map(item => {
      return {
        key: item.uuid,
        value: item.uuid,
        text: item.name,
      };
    });
  };

  const selectSearch = debounce(async (value: string) => {
    if (!value) return;
    setSelectFetch(true);
    let res = await axios.get(APIS.QUERY_COUNTRY_LIST, {
      params: {
        countryType,
        value,
        max: 5,
      },
    });

    let options = optionDataPack(res.data);
    setOptions(options);
    setSelectFetch(false);
  }, 800);

  return (
    <Space>
      <CountrySelectInfo
        countryBeforeArr={countryBeforeArr}
        onCountryTypeChange={onCountryTypeChange}
      />
      <SelectInfo
        placeholder='input search value'
        onUuidChange={onCountryUuidChange}
        options={options}
        selectFetch={selectFetch}
        selectSearch={selectSearch}
        value={countryUuid}
      />
    </Space>
  );
};
