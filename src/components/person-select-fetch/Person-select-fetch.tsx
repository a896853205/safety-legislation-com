import React, { useState } from 'react';

import axios from 'axios';
import debounce from 'lodash.debounce';

import * as APIS from '@constants/api-constants';
import PersonSelectInfo from './components/Person-select-info';

interface IProp {
  onUuidChange: Function;
}
interface ISelectOption {
  key: string;
  value: string;
  text: string;
}

export default ({ onUuidChange }: IProp) => {
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

  const selectSearch = debounce(async (name: string) => {
    if (!name) return;
    setSelectFetch(true);
    let res = await axios.get(APIS.QUERY_PERSON_LIST, {
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
    <PersonSelectInfo
      options={options}
      selectFetch={selectFetch}
      selectSearch={selectSearch}
      onUuidChange={onUuidChange}
    />
  );
};
