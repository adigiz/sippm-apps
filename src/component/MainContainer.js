import React, {Component} from 'react';
import {Layout, Menu, Icon, Avatar} from 'antd';
import {Sidebar} from "./common/Sidebar";

const { Header, Footer} = Layout;
const { SubMenu } = Menu;

class MainContainer extends Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Header className="header">
          <div className="logo"/>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px', textAlign: "right" }}
          >
            <SubMenu
              title={
                <span className="submenu-title-wrapper">
              <Avatar src={URL.MOCKED_LOGO} style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}/><b>Alexander Stroganof</b>
                <Icon type="caret-down" />
                </span>
              }
            >
              <Menu.Item key="setting:1">Option 1</Menu.Item>
            </SubMenu>
            <Menu.Item key="3" className="user-setting"> </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sidebar/>
        <Layout>

          <Footer style={{ textAlign: 'center' }}>SIPPM ©2019 Institut Teknologi Kalimantan</Footer>
        </Layout>
        </Layout>
      </Layout>
    );
  }
}

MainContainer.propTypes = {};

export default MainContainer;
