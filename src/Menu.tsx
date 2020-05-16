import React from 'react';
import { Link } from 'react-router-dom';

import { Menu } from 'antd';
import styled from 'styled-components';

const MyMenu = styled(Menu)`
  width: 410px;
`;

const MenuSpan = styled.span`
  margin-left: 20px;
  margin-right: 20px;
`;
export default () => {
  // const activeMenu = () => {
  //   获取当前url来active对应menu
  // }
  return (
    <MyMenu theme='light' mode='inline'>
      <Menu.ItemGroup key='g1' title='关联关系预览'>
        <Menu.Item key='1'>
          <Link to='/sponsorAndCosponsor'>
            <MenuSpan>
              &lt;基本角色实例，基本角色关系类型，基本角色实例&gt;
            </MenuSpan>
          </Link>
        </Menu.Item>
        <Menu.Item key='2'>
          <Link to='/organizationAndBill'>
            <MenuSpan>&lt;基本角色实例，基本角色类型，法案实例&gt;</MenuSpan>
          </Link>
        </Menu.Item>
        <Menu.Item key='3'>
          <MenuSpan>&lt;法案实例，法案关系类型，法案实例&gt;</MenuSpan>
        </Menu.Item>
        <Menu.Item key='4'>
          <Link to='/billAndPolicyArea'>
            <MenuSpan>&lt;法案实例，政策领域&gt;</MenuSpan>
          </Link>
        </Menu.Item>
        <Menu.Item key='5'>
          <MenuSpan>&lt;法案实例，法案类型&gt;</MenuSpan>
        </Menu.Item>
        <Menu.Item key='6'>
          <MenuSpan>&lt;法案实例，立法主题&gt;</MenuSpan>
        </Menu.Item>
        <Menu.Item key='7'>
          <MenuSpan>&lt;法案实例，初始状态，中间状态集，结束状态&gt;</MenuSpan>
        </Menu.Item>
        <Menu.Item key='8'>
          <MenuSpan>&lt;法案实例，提出时间，生效时间，失效时间&gt;</MenuSpan>
        </Menu.Item>
        <Menu.Item key='9'>
          <MenuSpan>&lt;法案实例状态，状态时间&gt;</MenuSpan>
        </Menu.Item>
        <Menu.Item key='10'>
          <MenuSpan>&lt;法案实例，覆盖地理区域&gt;</MenuSpan>
        </Menu.Item>
        <Menu.Item key='11'>
          <MenuSpan>&lt;法案实例，覆盖政治组织&gt;</MenuSpan>
        </Menu.Item>
      </Menu.ItemGroup>
    </MyMenu>
  );
};
