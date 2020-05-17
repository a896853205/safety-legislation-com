import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import * as APIS from '@constants/api-constants';
import LBStatisticsInfo from './components/LB-statistics-info';

interface IProp {
  legislativeSubjects: string;
}

export default ({ legislativeSubjects }: IProp) => {
  const [relativeBillNum, setRelativeBillNum] = useState(0);

  const queryLBStatistics = useCallback(async legislativeSubjects => {
    if (legislativeSubjects) {
      let { data } = await axios.get(APIS.QUERY_LB_STATISTICS, {
        params: {
          legislativeSubjects,
        },
      });
      setRelativeBillNum(data.relativeBillNum);
    }
  }, []);

  useEffect(() => {
    queryLBStatistics(legislativeSubjects);
  }, [legislativeSubjects, queryLBStatistics]);

  return <LBStatisticsInfo relativeBillNum={relativeBillNum} />;
};
