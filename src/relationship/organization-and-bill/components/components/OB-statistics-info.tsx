import React from 'react';

import { Statistic, Space } from 'antd';

interface IProp {
  relativeBillNum: number;
  committeeNum: number;
  constraintNum: number;
  executorNum: number;
  relatedObjectNum: number;
}

export default ({
  relativeBillNum,
  committeeNum,
  constraintNum,
  executorNum,
  relatedObjectNum,
}: IProp) => {
  return (
    <Space size='large'>
      <Statistic title='涉及到总法案数' value={relativeBillNum} />
      <Statistic title='作为管理者法案总数' value={committeeNum} />
      <Statistic title='作为执行者总数' value={executorNum} />
      <Statistic title='作为约束对象总数' value={constraintNum} />
      <Statistic title='作为相关对象总数' value={relatedObjectNum} />
    </Space>
  );
};
