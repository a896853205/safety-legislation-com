import React from 'react';

import { Statistic, Space } from 'antd';

interface IProp {
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
}: IProp) => {
  return (
    <Space size='large'>
      <Statistic title='当前法案管理者法案总数' value={committeeNum} />
      <Statistic title='当前法案执行者总数' value={executorNum} />
      <Statistic title='当前法案约束对象总数' value={constraintNum} />
      <Statistic title='当前法案相关对象总数' value={relatedObjectNum} />
    </Space>
  );
};
