import React, { useState, useEffect, useCallback } from 'react';

import axios from 'axios';
import debounce from 'lodash.debounce';

import BCTableInfo from './components/BC-table-info';
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
  billNumber: string;
  billCongress: number;
}

export default ({ billNumber, billCongress }: IProp) => {
  const [relationship, setRelationship] = useState<IRelationship[]>([]);
  const [page, setPage] = useState(1);
  const [totalNum, setTotalNum] = useState(0);
  const [pageSize, setPageSize] = useState(20);
  const [relationshipFetch, setRelationshipFetch] = useState(false);

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
          let { data } = await axios.get(APIS.QUERY_BILL_AND_COUNTRY, {
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
        }
      },
      800
    ),
    []
  );

  useEffect(() => {
    searchRelationship(billNumber, billCongress, pageSize, page);
  }, [searchRelationship, billNumber, billCongress, pageSize, page]);

  return (
    <BCTableInfo
      relationship={relationship}
      relationshipFetch={relationshipFetch}
      totalNum={totalNum}
      onPageChange={(page: number) => setPage(page)}
      pageSize={pageSize}
      onPageSizeChange={(pageSize: number) => setPageSize(pageSize)}
    />
  );
};
