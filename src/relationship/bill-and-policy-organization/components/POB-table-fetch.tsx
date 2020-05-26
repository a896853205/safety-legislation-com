import React, { useState, useEffect, useCallback, memo } from 'react';

import axios from 'axios';
import debounce from 'lodash.debounce';

// 和正向用的一个展示table组件
import BPOTableInfo from './components/BPO-table-info';
import * as APIS from '@constants/api-constants';

interface IPolicyOrganization {
  uuid: string;
  name: string;
}
interface IRelationship {
  uuid: string;
  number: string;
  policyOrganization: IPolicyOrganization[];
}
interface IProp {
  policyOrganizationUuid: string;
}

export default memo(({ policyOrganizationUuid }: IProp) => {
  const [relationship, setRelationship] = useState<IRelationship[]>([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [relationshipFetch, setRelationshipFetch] = useState(false);
  const [needFetch, setNeedFetch] = useState(false);

  const searchRelationship = useCallback(
    debounce(
      async (
        policyOrganizationUuid: string,
        pageSize: number,
        page: number
      ) => {
        if (policyOrganizationUuid) {
          setRelationshipFetch(true);
          let { data } = await axios.get(
            APIS.QUERY_POLICY_ORGANIZATION_AND_BILL,
            {
              params: {
                policyOrganizationUuid,
                pageSize,
                page,
              },
            }
          );

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
  }, [policyOrganizationUuid]);

  useEffect(() => {
    setNeedFetch(true);
  }, [policyOrganizationUuid, pageSize, page]);

  useEffect(() => {
    if (needFetch) {
      searchRelationship(policyOrganizationUuid, pageSize, page);
    }
  }, [searchRelationship, policyOrganizationUuid, pageSize, page, needFetch]);

  return (
    <BPOTableInfo
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
