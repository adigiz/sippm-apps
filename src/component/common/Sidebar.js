import {Icon, Menu, Sider} from "antd";
import React from "react";

export const Sidebar = () =>(
  <Sider  breakpoint="lg" onBreakpoint={broken => {
    console.log(broken);
  }} collapsedWidth="0" collapsed={this.state.collapsed} onCollapse={this.onCollapse} theme="light">
    <Menu defaultSelectedKeys={['1']} mode="inline">
      <Menu.Item key="1">
        <Icon type="pie-chart" />
        <span>Dashboard</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="desktop" />
        <span>Pengumuman</span>
      </Menu.Item>
    </Menu>
  </Sider>
);
