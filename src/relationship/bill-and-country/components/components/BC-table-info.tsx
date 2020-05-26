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
        title='billNumber'
        dataIndex='number'
        key='number'
        align='center'
      />
      <Column
        title='congress'
        dataIndex='congress'
        key='congress'
        align='center'
      />
      <Column
        title='countryName'
        dataIndex='country'
        align='center'
        render={(item: ICountry) => <span>{item.name}</span>}
      />
      <Column
        title='countryFullName'
        dataIndex='country'
        align='center'
        render={(item: ICountry) => <span>{item.fullName}</span>}
      />
      <Column
        title='countryTerritory'
        dataIndex='country'
        align='center'
        render={(item: ICountry) => <span>{item.territory}</span>}
      />
      <Column
        title='countryTerritoryDetail'
        dataIndex='country'
        align='center'
        render={(item: ICountry) => <span>{item.territoryDetail}</span>}
      />
    </Table>
  );
};
