import React, { useState, useEffect, useCallback, memo } from 'react';

import axios from 'axios';
import debounce from 'lodash.debounce';

import BPTableInfo from './components/BP-table-info';
import * as APIS from '@constants/api-constants';

interface IRelationship {
  uuid: string;
  number: string;
  policyArea: string;
}

interface IProp {
  billNumber: string;
  billCongress: number;
}

export default memo(({ billNumber, billCongress }: IProp) => {
  const [relationship, setRelationship] = useState<IRelationship[]>([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [relationshipFetch, setRelationshipFetch] = useState(false);
  const [needFetch, setNeedFetch] = useState(false);

  const searchRelationship = useCallback(
    debounce(
      async (
        billNumber: string,
        billCongress: number,
        pageSize: number,
        page: number
      ) => {
        if (billNumber && billCongress) {
          setRelationshipFetch(true);
          let { data } = await axios.get(APIS.QUERY_BILL_AND_POLICY_AREA, {
            params: {
              billNumber,
              billCongress,
              pageSize,
              page,
            },
          });

          setRelationship(data.data);
          setTotalNum(data.totalNum);
          setRelationshipFetch(false);
          setNeedFetch(false);
        }
      },
      800
    ),
    []
  );

  // 重置页数
  useEffect(() => {
    setPage(1);
  }, [billNumber, billCongress]);

  useEffect(() => {
    setNeedFetch(true);
  }, [billNumber, billCongress, pageSize, page]);

  useEffect(() => {
    if (needFetch) {
      searchRelationship(billNumber, billCongress, pageSize, page);
    }
  }, [searchRelationship, billNumber, billCongress, pageSize, page, needFetch]);

  return (
    <BPTableInfo
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
