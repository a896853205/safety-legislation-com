import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import * as APIS from '@constants/api-constants';
import OBStatisticsInfo from './components/OB-statistics-info';

interface IProp {
  organizationUuid: string;
}
export default ({ organizationUuid }: IProp) => {
  const [relativeBillNum, setRelativeBillNum] = useState(0);
  const [committeeNum, setCommitteeNum] = useState(0);
  const [constraintNum, setConstraintNum] = useState(0);
  const [executorNum, setExecutorNum] = useState(0);
  const [relatedObjectNum, setRelatedObjectNum] = useState(0);

  const querySCStatistics = useCallback(async organizationUuid => {
    if (organizationUuid) {
      let {
        data: {
          relativeBillNum,
          committeeNum,
          constraintNum,
          executorNum,
          relatedObjectNum,
        },
      } = await axios.get(APIS.QUERY_OB_STATISTICS, {
        params: {
          organizationUuid,
        },
      });
      setRelativeBillNum(relativeBillNum);
      setCommitteeNum(committeeNum);
      setConstraintNum(constraintNum);
      setExecutorNum(executorNum);
      setRelatedObjectNum(relatedObjectNum);
    }
  }, []);

  useEffect(() => {
    querySCStatistics(organizationUuid);
  }, [organizationUuid, querySCStatistics]);

  return (
    <OBStatisticsInfo
      relativeBillNum={relativeBillNum}
      committeeNum={committeeNum}
      constraintNum={constraintNum}
      executorNum={executorNum}
      relatedObjectNum={relatedObjectNum}
    />
  );
};
