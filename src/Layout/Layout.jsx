import {Button, Layout, Menu, theme} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import React, {useState} from "react";
import {renderItems} from "../utils/renderItems.jsx";
import SwitcherTheme from "../components/SwitcherTheme/SwitcherTheme.jsx";

export default function LayoutComponent(){
  const [collapsed, setCollapsed] = useState(false);
  const [key, setKey] = useState('1')
  const { Header, Sider, Content } = Layout;
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout style={{
        height: "100dvh"
      }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKey={['1']}
            defaultSelectedKeys={['1']}
            className="menu"
            items={[
              {
                key: '1',
                icon: <UserOutlined />,
                label: 'Homepage',
              },
              {
                key: '2',
                icon: <VideoCameraOutlined />,
                label: 'Start quiz',
              }
            ]}
            onClick={({key}) => setKey(key)}
          />
        </Sider>
        <Layout>
          <Header style={{
            padding: 0,
            background: colorBgContainer,
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <SwitcherTheme/>
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {renderItems(key)}
          </Content>
        </Layout>
      </Layout>
    </>
  )
}