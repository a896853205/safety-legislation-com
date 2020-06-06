import React from 'react';
import { Table } from 'antd';

const { Column } = Table;

interface IProp {
  relationship: IRelationship[];
  totalNum: number;
  relationshipFetch: boolean;
  onPageChange: Function;
  pageSize: number;
  onPageSizeChange: Function;
  page: number;
}
interface ICountry {
  uuid: string;
  name: string;
  fullName: string;
  territory: string;
  territoryDetail: string;
}
interface IRelationship {
  uuid: string;
  number: string;
  country: ICountry;
}

export default ({
  relationship,
  relationshipFetch,
  totalNum,
  onPageChange,
  pageSize,
  onPageSizeChange,
  page,
}: IProp) => {
  return (
    <Table
      dataSource={relationship}
      rowKey={record => record.uuid}
      loading={relationshipFetch}
      pagination={{
        current: page,
        pageSize,
        total: totalNum,
        onChange: (page, pageSize) => {
          if (pageSize) onPageSizeChange(pageSize);
          onPageChange(page);
        },
      }}>
      <Column
        title='法案号'
        dataIndex='number'
        key='number'
        align='center'
      />
      <Column
        title='国会届数'
        dataIndex='congress'
        key='congress'
        align='center'
      />
      <Column
        title='国家'
        dataIndex='country'
        align='center'
        render={(item: ICountry) => <span>{item.name}</span>}
      />
      <Column
        title='国家全称'
        dataIndex='country'
        align='center'
        render={(item: ICountry) => <span>{item.fullName}</span>}
      />
      <Column
        title='地理区域'
        dataIndex='country'
        align='center'
        render={(item: ICountry) => <span>{item.territory}</span>}
      />
      <Column
        title='地域细分'
        dataIndex='country'
        align='center'
        render={(item: ICountry) => <span>{item.territoryDetail}</span>}
      />
    </Table>
  );
};
