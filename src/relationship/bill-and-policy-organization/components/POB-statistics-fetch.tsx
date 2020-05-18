import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

import * as APIS from '@constants/api-constants';
import POBStatisticsInfo from './components/POB-statistics-info';

interface IProp {
  policyOrganizationUuid: string;
}

export default ({ policyOrganizationUuid }: IProp) => {
  const [relativeBillNum, setRelativeBillNum] = useState(0);

  const queryPOBStatistics = useCallback(async policyOrganizationUuid => {
    if (policyOrganizationUuid) {
      let { data } = await axios.get(APIS.QUERY_POB_STATISTICS, {
        params: {
          policyOrganizationUuid,
        },
      });
      setRelativeBillNum(data.relativeBillNum);
    }
  }, []);

  useEffect(() => {
    queryPOBStatistics(policyOrganizationUuid);
  }, [policyOrganizationUuid, queryPOBStatistics]);

  return <POBStatisticsInfo relativeBillNum={relativeBillNum} />;
};
