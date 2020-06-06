import React from 'react';

import loadable from '@loadable/component';

import Loading from '@components/loading/Loading';

export default loadable(() => import('@/dictionary/Dictionary'), {
  fallback: <Loading />,
});
