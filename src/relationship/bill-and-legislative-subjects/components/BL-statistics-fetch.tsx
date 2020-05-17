import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import * as APIS from '@constants/api-constants';
import BLStatisticsInfo from './components/BL-statistics-info';

interface IProp {
  billNumber: string;
  billCongress: number;
}

export default ({ billNumber, billCongress }: IProp) => {
  const [legislativeSubjectsNum, setlegislativeSubjectsNum] = useState(0);

  const queryBLStatistics = useCallback(async (billNumber, billCongress) => {
    if (billNumber && billCongress) {
      let { data } = await axios.get(APIS.QUERY_BL_STATISTICS, {
        params: {
          billNumber,
          billCongress,
        },
      });
      setlegislativeSubjectsNum(data.legislativeSubjectsNum);
    }
  }, []);

  useEffect(() => {
    queryBLStatistics(billNumber, billCongress);
  }, [billNumber, billCongress, queryBLStatistics]);

  return <BLStatisticsInfo legislativeSubjectsNum={legislativeSubjectsNum} />;
};
