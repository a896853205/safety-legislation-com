import React from 'react';
import { Table, Tag } from 'antd';

const { Column } = Table;

interface ICosponsor {
  uuid: string;
  cosponsor: { uuid: string; name: string };
}
interface IProp {
  relationship: IRelationship[];
  totalNum: number;
  relationshipFetch: boolean;
  onPageChange: Function;
  pageSize: number;
  onPageSizeChange: Function;
  page: number;
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
  sponsor: { uuid: string; name: string };
  cosponsors: ICosponsor[];
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
  page,
}: IProp) => {
  return (
    <Table
      dataSource={relationship}
      rowKey={record => record.uuid}
      loading={relationshipFetch}
      scroll={{ x: 1800 }}
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
        width={120}
        align='center'
        fixed='left'
      />
      <Column
        title='congress'
        dataIndex='congress'
        key='congress'
        width={100}
        align='center'
        fixed='left'
      />
      <Column
        title='sponsor'
        dataIndex='sponsor'
        key='sponsor'
        align='center'
        width={300}
        render={sponsor => <Tag color='geekblue'>{sponsor.name}</Tag>}
      />
      <Column
        title='cosponsors'
        dataIndex='cosponsor'
        key='cosponsor'
        width={300}
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
      <Column
        title='committees'
        dataIndex='committees'
        key='committees'
        width={300}
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
        width={300}
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
        width={300}
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
        width={300}
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
