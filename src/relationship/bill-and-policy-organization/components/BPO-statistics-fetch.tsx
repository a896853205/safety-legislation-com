import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import * as APIS from '@constants/api-constants';
import BPOStatisticsInfo from './components/BPO-statistics-info';

interface IProp {
  billNumber: string;
  billCongress: number;
}

export default ({ billNumber, billCongress }: IProp) => {
  const [policyOrganizationNum, setPolicyOrganizationNum] = useState(0);

  const queryBPOStatistics = useCallback(async (billNumber, billCongress) => {
    if (billNumber && billCongress) {
      let { data } = await axios.get(APIS.QUERY_BPO_STATISTICS, {
        params: {
          billNumber,
          billCongress,
        },
      });
      setPolicyOrganizationNum(data.totalNum);
    }
  }, []);

  useEffect(() => {
    queryBPOStatistics(billNumber, billCongress);
  }, [billNumber, billCongress, queryBPOStatistics]);

  return <BPOStatisticsInfo policyOrganizationNum={policyOrganizationNum} />;
};
