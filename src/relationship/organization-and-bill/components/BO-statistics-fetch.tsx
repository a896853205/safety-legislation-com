import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import * as APIS from '@constants/api-constants';
import BOStatisticsInfo from './components/BO-statistics-info';

interface IProp {
  billNumber: string;
  billCongress: number;
}

export default ({ billNumber, billCongress }: IProp) => {
  const [committeeNum, setCommitteeNum] = useState(0);
  const [constraintNum, setConstraintNum] = useState(0);
  const [executorNum, setExecutorNum] = useState(0);
  const [relatedObjectNum, setRelatedObjectNum] = useState(0);

  const querySCStatistics = useCallback(async (billNumber, billCongress) => {
    if (billNumber && billCongress) {
      let {
        data: {
          committeeNum,
          constraintNum,
          executorNum,
          relatedObjectNum,
        },
      } = await axios.get(APIS.QUERY_BO_STATISTICS, {
        params: {
          billNumber,
          billCongress,
        },
      });
      setCommitteeNum(committeeNum);
      setConstraintNum(constraintNum);
      setExecutorNum(executorNum);
      setRelatedObjectNum(relatedObjectNum);
    }
  }, []);

  useEffect(() => {
    querySCStatistics(billNumber, billCongress);
  }, [billNumber, billCongress, querySCStatistics]);

  return (
    <BOStatisticsInfo
      committeeNum={committeeNum}
      constraintNum={constraintNum}
      executorNum={executorNum}
      relatedObjectNum={relatedObjectNum}
    />
  );
};
