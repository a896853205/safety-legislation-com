import React, { useState, useEffect, useCallback, memo } from 'react';

import axios from 'axios';

import * as APIS from '@constants/api-constants';
import SCTableInfo from './components/SC-table-info';

interface ICosponsor {
  uuid: string;
  cosponsor: { uuid: string; name: string };
}
interface IRelationship {
  uuid: string;
  number: string;
  name: string;
  cosponsors: ICosponsor[];
}

export default memo(({ personUuid }: { personUuid: string }) => {
  const [relationship, setRelationship] = useState<IRelationship[]>([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [relationshipFetch, setRelationshipFetch] = useState(false);
  const [needFetch, setNeedFetch] = useState(false);

  const searchRelationship = useCallback(async (personUuid, pageSize, page) => {
    if (personUuid) {
      setRelationshipFetch(true);
      let { data } = await axios.get(APIS.QUERY_SPONSOR_AND_COSPONSOR, {
        params: {
          personUuid,
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
  }, [personUuid]);

  useEffect(() => {
    setNeedFetch(true);
  }, [personUuid, pageSize, page]);

  useEffect(() => {
    if (needFetch) {
      searchRelationship(personUuid, pageSize, page);
    }
  }, [searchRelationship, personUuid, pageSize, page, needFetch]);

  return (
    <SCTableInfo
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
