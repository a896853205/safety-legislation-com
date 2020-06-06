import React, { useState, useEffect, useCallback, memo } from 'react';

import { message } from 'antd';
import axios from 'axios';

import * as APIS from '@constants/api-constants';
import OBTableBillInfo from './components/OB-table-bill-info';

interface IRelationship {
  uuid: string;
  number: string;
}

export default memo(({ organizationUuid }: { organizationUuid: string }) => {
  const [relationship, setRelationship] = useState<IRelationship[]>([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [relationshipFetch, setRelationshipFetch] = useState(false);
  const [needFetch, setNeedFetch] = useState(false);

  const searchRelationship = useCallback(
    async (organizationUuid, pageSize, page) => {
      if (organizationUuid) {
        setRelationshipFetch(true);
        let { data } = await axios.get(APIS.QUERY_OB_COMMITTEE, {
          params: {
            organizationUuid,
            pageSize,
            page,
          },
        });

        setRelationship(data.data);
        setTotalNum(data.totalNum);
        setRelationshipFetch(false);
        setNeedFetch(false);
        message.success(`数据查询成功,共${data.totalNum}条`);
      }
    },
    []
  );

  // 重置页数
  useEffect(() => {
    setPage(1);
  }, [organizationUuid]);

  useEffect(() => {
    setNeedFetch(true);
  }, [organizationUuid, pageSize, page]);

  useEffect(() => {
    if (needFetch) {
      searchRelationship(organizationUuid, pageSize, page);
    }
  }, [searchRelationship, organizationUuid, pageSize, page, needFetch]);

  return (
    <OBTableBillInfo
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
