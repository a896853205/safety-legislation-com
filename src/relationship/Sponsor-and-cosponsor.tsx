import React from 'react';
import {
  Breadcrumb,
  Typography,
  Select,
  Button,
  Space,
  Tag,
  Table,
  Statistic,
  Spin,
} from 'antd';

import styled from 'styled-components';

const { Title } = Typography;
const { Column } = Table;
// const { Option } = Select;

const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

const MySelect = styled(Select)`
  width: 240px;
`;

interface ICosponsor {
  billNumber: string;
  sponsor: string;
  relationship: string;
  cosponsor: string[];
}

export default () => {
  let data: ICosponsor[] = [
    {
      billNumber: '10010',
      sponsor: 'sponsor',
      relationship: '联合提出',
      cosponsor: ['Eric', 'Luna'],
    },
    {
      billNumber: '10010',
      sponsor: 'sponsor',
      relationship: '联合提出',
      cosponsor: ['Eric', 'Luna'],
    },
    {
      billNumber: '10010',
      sponsor: 'sponsor',
      relationship: '联合提出',
      cosponsor: ['Eric', 'Luna'],
    },
    {
      billNumber: '10010',
      sponsor: 'sponsor',
      relationship: '联合提出',
      cosponsor: ['Eric', 'Luna'],
    },
    {
      billNumber: '10010',
      sponsor: 'sponsor',
      relationship: '联合提出',
      cosponsor: ['Eric', 'Luna'],
    },
  ];

  const SelectSearch = () => {
    // let res = axios(url)
    // let options = stringToOption(res.data);
    // setOptions(options);
  };

  return (
    <>
      <MarginBottom>
        <Breadcrumb>
          <Breadcrumb.Item>关联关系预览</Breadcrumb.Item>
          <Breadcrumb.Item>
            &lt;基本角色实例，基本角色关系类型，基本角色实例&gt;
          </Breadcrumb.Item>
        </Breadcrumb>
      </MarginBottom>
      <MarginBottom>
        <Title>&lt;基本角色实例，基本角色关系类型，基本角色实例&gt;</Title>
      </MarginBottom>
      <MarginBottom>
        <Space>
          <MySelect
            allowClear
            labelInValue
            showArrow={false}
            placeholder='Select users'
            notFoundContent={<Spin size='small' />}
            filterOption={false}
            onSearch={SelectSearch}
            onChange={() => {}}
            // {data.map(d => (
            //   <Option key={d.value}>{d.text}</Option>
            // ))}
          ></MySelect>
          <Button type='primary'>查询</Button>
        </Space>
      </MarginBottom>
      <MarginBottom>
        <Space size='large'>
          <Statistic title='涉及到法案' value={11293} />
          <Statistic title='关系类型' value={1} />
        </Space>
      </MarginBottom>
      <Table dataSource={data}>
        <Column title='法案实例' dataIndex='billNumber' key='billNumber' />
        <Column title='基本角色关系类型' dataIndex='sponsor' key='sponsor' />
        <Column
          title='基本角色关系类型'
          dataIndex='relationship'
          key='relationship'
        />
        <Column
          title='基本角色实例'
          dataIndex='cosponsor'
          key='cosponsor'
          render={(_text, record: ICosponsor) => (
            <span>
              {record.cosponsor.map(item => (
                <Tag color='blue'>{item}</Tag>
              ))}
            </span>
          )}
        />
      </Table>
    </>
  );
};
