import React from 'react';
import { Statistic } from 'antd';

interface IProp {
  relativeBillNum: number;
}

export default ({ relativeBillNum }: IProp) => {
  return <Statistic title='涉及到法案' value={relativeBillNum} />;
};
