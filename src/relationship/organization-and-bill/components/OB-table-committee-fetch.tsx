import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';

import * as APIS from '@constants/api-constants';
import OBTableBillInfo from './components/OB-table-bill-info';

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

export default ({ organizationUuid }: { organizationUuid: string }) => {
  const [relationship, setRelationship] = useState<IRelationship[]>([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [relationshipFetch, setRelationshipFetch] = useState(false);

  const searchRelationship = useCallback(async (organizationUuid, pageSize, page) => {
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
    }
  }, []);

  useEffect(() => {
    searchRelationship(organizationUuid, pageSize, page);
  }, [searchRelationship, organizationUuid, pageSize, page]);

  return (
    <OBTableBillInfo
      relationship={relationship}
      relationshipFetch={relationshipFetch}
      totalNum={totalNum}
      onPageChange={(page: number) => setPage(page)}
      pageSize={pageSize}
      onPageSizeChange={(pageSize: number) => setPageSize(pageSize)}
    />
  );
};
