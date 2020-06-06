import React from 'react';

import loadable from '@loadable/component';

import Loading from '@components/loading/Loading';

export default loadable(
  () => import('@/relationship/bill-and-country/Bill-and-country'),
  {
    fallback: <Loading />,
  }
);
