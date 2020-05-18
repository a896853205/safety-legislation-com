import React, { useState, useEffect, useCallback } from 'react';

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
  countryType?: string;
}

export default ({ countryUuid, countryType }: IProp) => {
  const [relationship, setRelationship] = useState<IRelationship[]>([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [relationshipFetch, setRelationshipFetch] = useState(false);

  const searchRelationship = useCallback(
    debounce(
      async (
        pageSize: number,
        page: number,
        countryUuid?: string,
        countryType?: string
      ) => {
        if (countryUuid && countryType) {
          setRelationshipFetch(true);
          let { data } = await axios.get(APIS.QUERY_BILL_AND_COUNTRY, {
            params: {
              countryUuid,
              countryType,
              pageSize,
              page,
            },
          });

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
    searchRelationship(pageSize, page, countryUuid, countryType);
  }, [searchRelationship, countryUuid, countryType, pageSize, page]);

  return (
    <CBTableInfo
      relationship={relationship}
      relationshipFetch={relationshipFetch}
      totalNum={totalNum}
      onPageChange={(page: number) => setPage(page)}
      pageSize={pageSize}
      onPageSizeChange={(pageSize: number) => setPageSize(pageSize)}
    />
  );
};
