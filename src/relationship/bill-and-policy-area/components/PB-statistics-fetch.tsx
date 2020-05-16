import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import * as APIS from '@constants/api-constants';
import PBStatisticsInfo from './components/PB-statistics-info';

interface IProp {
  policyArea: string;
}

export default ({ policyArea }: IProp) => {
  const [relativeBillNum, setRelativeBillNum] = useState(0);

  const queryPBStatistics = useCallback(async policyArea => {
    if (policyArea) {
      let { data } = await axios.get(APIS.QUERY_PB_STATISTICS, {
        params: {
          policyArea,
        },
      });
      setRelativeBillNum(data.relativeBillTotal);
    }
  }, []);

  useEffect(() => {
    queryPBStatistics(policyArea);
  }, [policyArea, queryPBStatistics]);

  return <PBStatisticsInfo relativeBillNum={relativeBillNum} />;
};
