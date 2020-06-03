import React from 'react';

import { Breadcrumb, Typography, Descriptions } from 'antd';
import styled from 'styled-components';

const { Title } = Typography;
const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

export default () => {
  return (
    <>
      <MarginBottom>
        <Breadcrumb>
          <Breadcrumb.Item>词汇表</Breadcrumb.Item>
          <Breadcrumb.Item>词汇表</Breadcrumb.Item>
        </Breadcrumb>
      </MarginBottom>
      <MarginBottom>
        <Title>词汇表</Title>
      </MarginBottom>
      <MarginBottom>
        <Descriptions bordered>
          <Descriptions.Item label='基本角色类型' span={3}>
            提出者：将法案实例的提出人定义为提出者。
            <br />
            联合提出者：将法案实例的联合提出人定义为联合提出者。
            <br />
            管理者：将法案实例所属的管理委员会定义为管理者。
            <br />
            执行者：将法案文本所要求的执行方定义为执行者。
            <br />
            约束对象：将被法案文本内容约束的组织、职务定义为约束对象。
            <br />
            相关对象：将其他与法案文本相关的组织、职务定义为相关对象。
          </Descriptions.Item>
          <Descriptions.Item label='基本角色关系类型' span={3}>
            联合发起：同一篇法案的提出者与联合提出者间的关系定义为联合发起。
          </Descriptions.Item>
          <Descriptions.Item label='政策领域' span={3}>
            通过对法案文本内容进行分析，对其所对应的领域进行分类，并将其定义为政策领域。每篇法案对应一项政策领域。统计与网络信息安全相关的政策领域类型共计19项。
          </Descriptions.Item>
          <Descriptions.Item label='立法主题' span={3}>
            通过对法案文本内容进行分析，对其所涵盖的主题进行分类通过对法案实例涵盖的主题进行分类，并将其定义为立法主题。每篇法案对应多项立法主题。统计与网络信息安全相关的立法主题类型共计864项。
          </Descriptions.Item>
          <Descriptions.Item label='法案关系类型' span={3}>
            国家内部各项法案实例间的关系
            <br />
            Amend：修正关系，法案实例与其修正案之间的相互关系定义为Amend。
            <br />
            Substitution：替代关系，被议会通过可以代替另一篇法案的立法文本间的关系定义为Substitution。
            <br />
            Identical：相同关系，两篇文本内容完全相同或文本相似度极高的法案实体间的关系定义为Identical。
            <br />
            Similar：同类关系，两篇政策领域相同、立法主题、关键词高度相似的法案实例间的关系定义为Similar。
            <br />
            由于在Identical与Similar的界定上可能会存在冲突的问题，因此在产生此问题的情况下，本课题优先将法案实例间的关系定义为Identical。
            <br />
            国家之间各项法案实例间的关系
            <br />
            Related：相关关系，两篇源于不同国家的政策领域相同、立法主题、关键词高度相似并且文本内容高度相似的法案实例间的关系定义为Related，意为引入同一个法案。
          </Descriptions.Item>
          <Descriptions.Item label='法案状态' span={3}>
            将法案实例的立法进程分为多个步骤，将立法进程中第一个步骤定义为法案实例的初始状态，将初始状态对应的时间定义为提出时间；将立法进程中最后一个步骤定义为结束状态；其余步骤定义为中间状态。
          </Descriptions.Item>
          <Descriptions.Item label='地理区域和政治组织' span={3}>
            地理区域：法案实体所属国家所在州际及地缘信息。
            <br />
            政治组织：法案实体所属国家加入的国际组织。
          </Descriptions.Item>
          <Descriptions.Item label='法案类型' span={3}>
            通过对文本进行语义分析，进行关键词抽取，对关键词所述立法主题进行聚类，建立分类树，对法案实例进行分类。
          </Descriptions.Item>
        </Descriptions>
      </MarginBottom>
    </>
  );
};
