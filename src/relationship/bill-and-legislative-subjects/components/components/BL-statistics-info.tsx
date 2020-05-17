import React from 'react';

import { Statistic } from 'antd';

interface IProp {
  legislativeSubjectsNum: number;
}

export default ({ legislativeSubjectsNum }: IProp) => {
  return (
    <Statistic title='该法案立法主题个数' value={legislativeSubjectsNum} />
  );
};
