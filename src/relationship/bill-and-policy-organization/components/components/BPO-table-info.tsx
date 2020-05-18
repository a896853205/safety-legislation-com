import React from 'react';
import { Table, Tag } from 'antd';

const { Column } = Table;

interface IProp {
  relationship: IRelationship[];
  totalNum: number;
  relationshipFetch: boolean;
  onPageChange: Function;
  pageSize: number;
  onPageSizeChange: Function;
}
interface IPolicyOrganization {
  uuid: string;
  name: string;
}
interface IRelationship {
  uuid: string;
  number: string;
  policyOrganization: IPolicyOrganization[];
}

export default ({
  relationship,
  relationshipFetch,
  totalNum,
  onPageChange,
  pageSize,
  onPageSizeChange,
}: IProp) => {
  return (
    <Table
      dataSource={relationship}
      rowKey={record => record.uuid}
      loading={relationshipFetch}
      pagination={{
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
        title='policyOrganization'
        dataIndex='policyOrganization'
        key='policyOrganization'
        render={legislativeSubjects =>
          legislativeSubjects.map((legislativeSubject: IPolicyOrganization) => (
            <Tag key={legislativeSubject.uuid}>{legislativeSubject.name}</Tag>
          ))
        }
      />
    </Table>
  );
};
