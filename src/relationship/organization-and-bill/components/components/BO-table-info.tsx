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
interface IOrganization {
  uuid: string;
  name: string;
}
interface ICommittee {
  uuid: string;
  organization: IOrganization;
}
interface IConstraint {
  uuid: string;
  organization: IOrganization;
}
interface IExecutor {
  uuid: string;
  organization: IOrganization;
}
interface IRelatedObject {
  uuid: string;
  organization: IOrganization;
}

interface IRelationship {
  uuid: string;
  number: string;
  committees: ICommittee[];
  constraint: IConstraint[];
  executor: IExecutor[];
  relatedObject: IRelatedObject[];
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
        title='committees'
        dataIndex='committees'
        key='committees'
        render={committees =>
          committees.map((committee: ICommittee) => (
            <Tag key={committee.organization.uuid}>
              {committee.organization.name}
            </Tag>
          ))
        }
      />
      <Column
        title='constraint'
        dataIndex='constraint'
        key='constraint'
        render={constraint =>
          constraint.map((constraint: IConstraint) => (
            <Tag key={constraint.organization.uuid}>
              {constraint.organization.name}
            </Tag>
          ))
        }
      />
      <Column
        title='executor'
        dataIndex='executor'
        key='executor'
        render={executor =>
          executor.map((executor: IExecutor) => (
            <Tag key={executor.organization.uuid}>
              {executor.organization.name}
            </Tag>
          ))
        }
      />
      <Column
        title='relatedObject'
        dataIndex='relatedObject'
        key='relatedObject'
        render={relatedObject =>
          relatedObject.map((relatedObject: IRelatedObject) => (
            <Tag key={relatedObject.organization.uuid}>
              {relatedObject.organization.name}
            </Tag>
          ))
        }
      />
    </Table>
  );
};
