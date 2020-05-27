import React, { useState, useEffect, useCallback, memo } from 'react';

import axios from 'axios';
import debounce from 'lodash.debounce';

import CBTableInfo from './components/CB-table-info';
import * as APIS from '@constants/api-constants';

interface ICountry {
  uuid: string;
  name: string;
  fullName: string;
  territory: string;
  territoryDetail: string;
}
interface IRelationship {
  uuid: string;
  number: string;
  country: ICountry;
}
interface IProp {
  countryUuid?: string;
}

export default memo(({ countryUuid }: IProp) => {
  const [relationship, setRelationship] = useState<IRelationship[]>([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [relationshipFetch, setRelationshipFetch] = useState(false);
  const [needFetch, setNeedFetch] = useState(false);

  const searchRelationship = useCallback(
    debounce(async (pageSize: number, page: number, countryUuid?: string) => {
      if (countryUuid) {
        setRelationshipFetch(true);
        let { data } = await axios.get(APIS.QUERY_COUNTRY_AND_BILL, {
          params: {
            countryUuid,
            pageSize,
            page,
          },
        });

        setRelationship(data.data);
        setTotalNum(data.totalNum);
        setRelationshipFetch(false);
        setNeedFetch(false);
      }
    }, 800),
    []
  );

  // 重置页数
  useEffect(() => {
    setPage(1);
  }, [countryUuid]);

  useEffect(() => {
    setNeedFetch(true);
  }, [countryUuid, pageSize, page]);

  useEffect(() => {
    if (needFetch) {
      searchRelationship(pageSize, page, countryUuid);
    }
  }, [searchRelationship, countryUuid, pageSize, page, needFetch]);

  return (
    <CBTableInfo
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
