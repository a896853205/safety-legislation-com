import React, { useState, useEffect, useCallback, memo } from 'react';

import axios from 'axios';

import * as APIS from '@constants/api-constants';
import PBTableBillInfo from './components/PB-table-bill-info';

interface IRelationship {
  uuid: string;
  number: string;
}

export default memo(({ policyArea }: { policyArea: string }) => {
  const [relationship, setRelationship] = useState<IRelationship[]>([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [relationshipFetch, setRelationshipFetch] = useState(false);
  const [needFetch, setNeedFetch] = useState(false);

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
      setNeedFetch(false);
    }
  }, []);

  // 重置页数
  useEffect(() => {
    setPage(1);
  }, [policyArea]);

  useEffect(() => {
    setNeedFetch(true);
  }, [policyArea, pageSize, page]);

  useEffect(() => {
    if (needFetch) {
      searchRelationship(policyArea, pageSize, page);
    }
  }, [searchRelationship, policyArea, pageSize, page, needFetch]);

  return (
    <PBTableBillInfo
      page={page}
      relationship={relationship}
      relationshipFetch={relationshipFetch}
      totalNum={totalNum}
      onPageChange={(page: number) => setPage(page)}
      pageSize={pageSize}
      onPageSizeChange={(pageSize: number) => setPageSize(pageSize)}
    />
  );
});
