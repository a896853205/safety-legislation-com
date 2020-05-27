import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import * as APIS from '@constants/api-constants';
import CBStatisticsInfo from './components/CB-statistics-info';

interface IProp {
  countryUuid?: string;
}

export default ({ countryUuid }: IProp) => {
  const [relativeBillNum, setRelativeBillNum] = useState(0);

  const queryCBStatistics = useCallback(async countryUuid => {
    if (countryUuid) {
      let { data } = await axios.get(APIS.QUERY_CB_STATISTICS, {
        params: {
          countryUuid,
        },
      });
      setRelativeBillNum(data.relativeBillTotal);
    }
  }, []);

  useEffect(() => {
    queryCBStatistics(countryUuid);
  }, [countryUuid, queryCBStatistics]);

  return <CBStatisticsInfo relativeBillNum={relativeBillNum} />;
};
