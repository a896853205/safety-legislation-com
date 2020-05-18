import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import * as APIS from '@constants/api-constants';
import CBStatisticsInfo from './components/CB-statistics-info';

interface IProp {
  countryUuid?: string;
  countryType?: string;
}

export default ({ countryUuid, countryType }: IProp) => {
  const [relativeBillNum, setRelativeBillNum] = useState(0);

  const queryCBStatistics = useCallback(async (countryUuid, countryType) => {
    if (countryUuid && countryType) {
      let { data } = await axios.get(APIS.QUERY_CB_STATISTICS, {
        params: {
          countryUuid,
          countryType,
        },
      });
      setRelativeBillNum(data.relativeBillNum);
    }
  }, []);

  useEffect(() => {
    queryCBStatistics(countryUuid, countryType);
  }, [countryUuid, countryType, queryCBStatistics]);

  return <CBStatisticsInfo relativeBillNum={relativeBillNum} />;
};
