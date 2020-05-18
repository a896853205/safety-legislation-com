import React from 'react';

import { Statistic } from 'antd';

interface IProp {
  policyOrganizationNum: number;
}

export default ({ policyOrganizationNum }: IProp) => {
  return <Statistic title='覆盖政治组织个数' value={policyOrganizationNum} />;
};
