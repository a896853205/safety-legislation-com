import React, { useState } from 'react';
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
  Empty,
} from 'antd';
import axios from 'axios';
import styled from 'styled-components';
import debounce from 'lodash.debounce';
import * as APIS from '@src/constants/api-constants';

const { Title } = Typography;
const { Column } = Table;
const { Option } = Select;

const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

const MySelect = styled(Select)`
  width: 240px;
`;

interface ISelectOption {
  key: string;
  value: string;
  text: string;
}

interface ICosponsor {
  uuid: string;
  cosponsor: { uuid: string; name: string };
}

interface IRelationship {
  uuid: string;
  number: string;
  name: string;
  cosponsors: ICosponsor[];
}
interface IRelationshipRes {
  tableData: {
    totalNum: number;
    page: number;
    data: IRelationship[];
  };
  relativeBillNum: number;
}

const optionDataPack = (
  data: { uuid: string; name: string }[]
): ISelectOption[] => {
  return data.map(item => {
    return {
      key: item.uuid,
      value: item.uuid,
      text: item.name,
    };
  });
};

export default () => {
  const [options, setOptions] = useState<ISelectOption[]>([]);
  const [selectFetch, setSelectFetch] = useState(false);
  const [personUuid, setPersonUuid] = useState('');
  const [relationship, setRelationship] = useState<IRelationship[]>([]);
  const [relationshipFetch, setRelationshipFetch] = useState(false);
  const [relativeBillNum, setRelativeBillNum] = useState(0);

  const SelectSearch = debounce(async (name: string) => {
    if (!name) return;
    setSelectFetch(true);
    let res = await axios.get(APIS.QUERY_PERSON_LIST, {
      params: {
        name,
        max: 5,
      },
    });

    let options = optionDataPack(res.data);
    setOptions(options);
    setSelectFetch(false);
  }, 800);

  const searchRelationship = async () => {
    setRelationshipFetch(true);
    let { data } = await axios.get(APIS.QUERY_SPONSOR_AND_COSPONSOR, {
      params: {
        personUuid,
        pageSize: 20,
      },
    });

    setRelationship(data.tableData.data);
    setRelativeBillNum(data.relativeBillNum);
    setRelationshipFetch(false);
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
            showSearch
            showArrow={false}
            placeholder='Select users'
            notFoundContent={selectFetch ? <Spin size='small' /> : <Empty />}
            filterOption={false}
            onSearch={SelectSearch}
            onChange={personUuid => {
              setPersonUuid(`${personUuid}`);
            }}>
            {options.map(d => (
              <Option key={d.value} value={d.value}>
                {d.text}
              </Option>
            ))}
          </MySelect>
          <Button type='primary' onClick={searchRelationship}>
            查询
          </Button>
        </Space>
      </MarginBottom>
      <MarginBottom>
        <Space size='large'>
          <Statistic title='涉及到法案' value={relativeBillNum} />
          <Statistic title='关系类型' value={1} />
        </Space>
      </MarginBottom>
      <Table
        dataSource={relationship}
        rowKey={record => record.uuid}
        loading={relationshipFetch}>
        <Column title='法案实例' dataIndex='number' key='number' width={100} align='center' />
        <Column
          title='基本角色关系类型'
          dataIndex='sponsor'
          key='sponsor'
          render={() => <span>sponsor</span>}
          width={150}
          align='center'
        />
        <Column
          title='基本角色关系类型'
          dataIndex='relationship'
          key='relationship'
          render={() => <span>联合提出</span>}
          width={150}
          align='center'
        />
        <Column
          title='基本角色实例'
          dataIndex='cosponsor'
          key='cosponsor'
          render={(_text, record: IRelationship) => (
            <span>
              {record.cosponsors.map((item: ICosponsor) => (
                <Tag color='blue' key={item.cosponsor.uuid}>
                  {item.cosponsor.name}
                </Tag>
              ))}
            </span>
          )}
        />
      </Table>
    </>
  );
};
