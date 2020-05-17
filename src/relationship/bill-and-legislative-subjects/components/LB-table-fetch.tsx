import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';
import debounce from 'lodash.debounce';

// 和BLfetch用的是一个
import BLTableInfo from './components/BL-table-info';
import * as APIS from '@constants/api-constants';

interface ILegislativeSubject {
  uuid: string;
  name: string;
}
interface IRelationship {
  uuid: string;
  number: string;
  legislativeSubject: ILegislativeSubject[];
}
interface IProp {
  legislativeSubjects: string;
}

export default ({ legislativeSubjects }: IProp) => {
  const [relationship, setRelationship] = useState<IRelationship[]>([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [relationshipFetch, setRelationshipFetch] = useState(false);

  const searchRelationship = useCallback(
    debounce(
      async (legislativeSubjects: string, pageSize: number, page: number) => {
        if (legislativeSubjects) {
          setRelationshipFetch(true);
          let { data } = await axios.get(
            APIS.QUERY_LEGISLATIVE_SUBJECTS_AND_BILL,
            {
              params: {
                legislativeSubjects,
                pageSize,
                page,
              },
            }
          );

          setRelationship(data.data);
          setTotalNum(data.totalNum);
          setRelationshipFetch(false);
        }
      },
      800
    ),
    []
  );

  useEffect(() => {
    searchRelationship(legislativeSubjects, pageSize, page);
  }, [searchRelationship, legislativeSubjects, pageSize, page]);

  return (
    <BLTableInfo
      relationship={relationship}
      relationshipFetch={relationshipFetch}
      totalNum={totalNum}
      onPageChange={(page: number) => setPage(page)}
      pageSize={pageSize}
      onPageSizeChange={(pageSize: number) => setPageSize(pageSize)}
    />
  );
};
