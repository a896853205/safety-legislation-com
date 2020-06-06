import React, { useState } from 'react';

import axios from 'axios';
import debounce from 'lodash.debounce';

import * as APIS from '@constants/api-constants';
import SelectInfo from '../select-info/Select-info';

interface IProp {
  onLegislativeSubjectsChange: Function;
}
interface ISelectOption {
  key: string;
  value: string;
  text: string;
}

export default ({ onLegislativeSubjectsChange }: IProp) => {
  const [options, setOptions] = useState<ISelectOption[]>([]);
  const [selectFetch, setSelectFetch] = useState(false);

  const optionDataPack = (data: { subject: string }[]): ISelectOption[] => {
    return data.map(item => {
      return {
        key: item.subject,
        value: item.subject,
        text: item.subject,
      };
    });
  };

  const selectSearch = debounce(async (name: string) => {
    if (!name) return;
    setSelectFetch(true);
    let res = await axios.get(APIS.QUERY_LEGISLATIVE_SUBJECTS_LIST, {
      params: {
        name,
        max: 5,
      },
    });

    let options = optionDataPack(res.data);
    setOptions(options);
    setSelectFetch(false);
  }, 800);

  return (
    <SelectInfo
      options={options}
      selectFetch={selectFetch}
      selectSearch={selectSearch}
      onUuidChange={onLegislativeSubjectsChange}
      placeholder='请输入立法主题'
      tooltipValue='如: Computer security and identity theft'
    />
  );
};
