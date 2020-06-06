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
        title='法案号'
        dataIndex='number'
        key='number'
        width={120}
        align='center'
        fixed='left'
      />
      <Column
        title='国会届数'
        dataIndex='congress'
        key='congress'
        width={100}
        align='center'
        fixed='left'
      />
      <Column
        title='提出者'
        dataIndex='sponsor'
        key='sponsor'
        align='center'
        width={300}
        render={sponsor => <Tag color='geekblue'>{sponsor.name}</Tag>}
      />
      <Column
        title='联合提出者'
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
        title='管理者'
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
        title='约束对象'
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
        title='执行者'
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
        title='相关对象'
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
