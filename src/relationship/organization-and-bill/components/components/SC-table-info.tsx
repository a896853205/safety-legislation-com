import React from 'react';
import { Tag, Table } from 'antd';

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
        width={100}
        align='center'
      />
      <Column
        title='国会届数'
        dataIndex='congress'
        key='congress'
        width={100}
        align='center'
      />
      <Column
        title='基本角色类型'
        dataIndex='personType'
        key='personType'
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
        title='提出者'
        dataIndex='sponsor'
        key='sponsor'
        align='center'
        width={150}
        render={sponsor => <Tag color='geekblue'>{sponsor.name}</Tag>}
      />
      <Column
        title='联合提出者'
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
  );
};
