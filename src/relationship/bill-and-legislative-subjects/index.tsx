import React from 'react';

import loadable from '@loadable/component';

import Loading from '@components/loading/Loading';

export default loadable(
  () =>
    import(
      '@/relationship/bill-and-legislative-subjects/Bill-and-legislative-subjects'
    ),
  {
    fallback: <Loading />,
  }
);
