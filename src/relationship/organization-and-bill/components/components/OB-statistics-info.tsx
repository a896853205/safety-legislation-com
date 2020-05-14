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
    <Space>
      <Statistic title='涉及到法案' value={relativeBillNum} />
      <Statistic title='管理者' value={committeeNum} />
      <Statistic title='执行者' value={executorNum} />
      <Statistic title='约束对象' value={constraintNum} />
      <Statistic title='相关对象' value={relatedObjectNum} />
    </Space>
  );
};
