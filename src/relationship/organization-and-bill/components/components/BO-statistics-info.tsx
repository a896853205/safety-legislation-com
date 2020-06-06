import React from 'react';

import { Statistic, Space } from 'antd';

interface IProp {
  cosponsorNum: number;
  committeeNum: number;
  constraintNum: number;
  executorNum: number;
  relatedObjectNum: number;
}

export default ({
  committeeNum,
  constraintNum,
  executorNum,
  relatedObjectNum,
  cosponsorNum,
}: IProp) => {
  return (
    <Space size='large'>
      <Statistic title='当前法案联合提出者总数' value={cosponsorNum} />
      <Statistic title='当前法案管理者法案总数' value={committeeNum} />
      <Statistic title='当前法案执行者总数' value={executorNum} />
      <Statistic title='当前法案约束对象总数' value={constraintNum} />
      <Statistic title='当前法案相关对象总数' value={relatedObjectNum} />
    </Space>
  );
};
