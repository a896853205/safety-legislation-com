import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import * as APIS from '@constants/api-constants';
import PBTableBillInfo from './components/PB-table-bill-info';

interface IRelationship {
  uuid: string;
  number: string;
}

export default ({ policyArea }: { policyArea: string }) => {
  const [relationship, setRelationship] = useState<IRelationship[]>([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [relationshipFetch, setRelationshipFetch] = useState(false);

  const searchRelationship = useCallback(async (policyArea, pageSize, page) => {
    if (policyArea) {
      setRelationshipFetch(true);
      let { data } = await axios.get(APIS.QUERY_POLICY_AREA_AND_BILL, {
        params: {
          policyArea,
          pageSize,
          page,
        },
      });

      setRelationship(data.data);
      setTotalNum(data.totalNum);
      setRelationshipFetch(false);
    }
  }, []);

  useEffect(() => {
    searchRelationship(policyArea, pageSize, page);
  }, [searchRelationship, policyArea, pageSize, page]);

  return (
    <PBTableBillInfo
      relationship={relationship}
      relationshipFetch={relationshipFetch}
      totalNum={totalNum}
      onPageChange={(page: number) => setPage(page)}
      pageSize={pageSize}
      onPageSizeChange={(pageSize: number) => setPageSize(pageSize)}
    />
  );
};
