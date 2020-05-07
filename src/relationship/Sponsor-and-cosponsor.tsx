import React, { useState, useEffect, useCallback } from 'react';
import {
  Breadcrumb,
  Typography,
  Select,
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
  const [totalNum, setTotalNum] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);

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

  const searchRelationship = useCallback(async (personUuid, pageSize, page) => {
    if (personUuid) {
      setRelationshipFetch(true);
      let { data } = await axios.get(APIS.QUERY_SPONSOR_AND_COSPONSOR, {
        params: {
          personUuid,
          pageSize,
          page,
        },
      });

      setRelationship(data.data);
      setTotalNum(data.totalNum);
      setRelationshipFetch(false);
    }
  }, []);

  useEffect(() => {
    searchRelationship(personUuid, pageSize, page);
  }, [searchRelationship, personUuid, pageSize, page]);

  useEffect(() => {
    if (personUuid) {
      // axios 调用返回一些总结数据
      setRelativeBillNum(10);
    }
  }, [personUuid]);

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
        loading={relationshipFetch}
        pagination={{
          pageSize,
          total: totalNum,
          onChange: (page, pageSize) => {
            if (pageSize) setPageSize(pageSize);
            setPage(page);
          },
        }}>
        <Column
          title='billNumber'
          dataIndex='number'
          key='number'
          width={100}
          align='center'
        />
        <Column
          title='congress'
          dataIndex='congress'
          key='congress'
          width={100}
          align='center'
        />
        <Column
          title='personType'
          dataIndex='personType'
          key='personType'
          width={150}
          align='center'
        />
        <Column
          title='relationshipType'
          dataIndex='relationship'
          key='relationship'
          render={() => <span>联合提出</span>}
          width={150}
          align='center'
        />
        <Column
          title='sponsor'
          dataIndex='sponsor'
          key='sponsor'
          align='center'
          width={150}
          render={sponsor => <Tag color='geekblue'>{sponsor.name}</Tag>}
        />
        <Column
          title='cosponsors'
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
