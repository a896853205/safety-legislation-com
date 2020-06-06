import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import * as APIS from '@constants/api-constants';
import SCStatisticsInfo from './components/SC-statistics-info';

interface IProp {
  personUuid: string;
}

export default ({ personUuid }: IProp) => {
  const [relativeBillNum, setRelativeBillNum] = useState(0);

  const querySCStatistics = useCallback(async personUuid => {
    if (personUuid) {
      let { data } = await axios.get(APIS.QUERY_SC_STATISTICS, {
        params: {
          personUuid,
        },
      });
      setRelativeBillNum(data.relativeBillTotal);
    }
  }, []);

  useEffect(() => {
    querySCStatistics(personUuid);
  }, [personUuid, querySCStatistics]);

  return <SCStatisticsInfo relativeBillNum={relativeBillNum} />;
};
