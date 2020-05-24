import React, { useState, useEffect } from 'react';

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
    data: {
      uuid: string;
      name?: string;
      fullName?: string;
      territory?: string;
      territoryDetail?: string;
    }[],
    countryType: string | undefined
  ): ISelectOption[] => {
    let res: ISelectOption[] = [];
    if (countryType === 'countryName') {
      data.forEach(item => {
        if (item?.name) {
          res.push({
            key: item.uuid,
            value: item.uuid,
            text: item.name,
          });
        }
      });
    } else if (countryType === 'countryFullName') {
      data.forEach(item => {
        if (item?.fullName) {
          res.push({
            key: item.uuid,
            value: item.uuid,
            text: item.fullName,
          });
        }
      });
    } else if (countryType === 'territory') {
      data.forEach(item => {
        if (item?.territory) {
          res.push({
            key: item.uuid,
            value: item.uuid,
            text: item.territory,
          });
        }
      });
    } else if (countryType === 'territoryDetail') {
      data.forEach(item => {
        if (item?.territoryDetail) {
          res.push({
            key: item.uuid,
            value: item.uuid,
            text: item.territoryDetail,
          });
        }
      });
    }
    return res;
  };

  const selectSearch = debounce(async (value: string) => {
    if (!value) return;
    setSelectFetch(true);
    let res = await axios.get(APIS.QUERY_COUNTRY_LIST, {
      params: {
        countryType,
        name: value,
        max: 5,
      },
    });

    let options = optionDataPack(res.data, countryType);
    setOptions(options);
    setSelectFetch(false);
  }, 800);

  useEffect(() => {
    setOptions([]);
  }, [countryType]);

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
