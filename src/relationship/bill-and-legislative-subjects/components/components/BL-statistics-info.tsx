import React from 'react';

import { Statistic } from 'antd';

interface IProp {
  totalNum: number;
}

export default ({ totalNum }: IProp) => {
  return <Statistic title='该法案立法主题个数' value={totalNum} />;
};
