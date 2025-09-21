import {Button, Layout, Menu, theme} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined, PlusCircleOutlined,
  UserOutlined,
  VideoCameraOutlined
} from "@ant-design/icons";
import React, {useState} from "react";
import {renderItems} from "../utils/RenderItems.jsx";
import SwitcherTheme from "../components/SwitcherTheme/SwitcherTheme.jsx";
import {useTheme} from "../hooks/useTheme.js";

export default function LayoutComponent(){
  const [collapsed, setCollapsed] = useState(false);
  const {themeColor, setThemeColor} = useTheme()
  const [key, setKey] = useState('1')
  const { Header, Sider, Content } = Layout;
  const {
    token: { borderRadiusLG },
  } = theme.useToken();
  return (
    <>
      <Layout style={{
        height: "100dvh"
      }}>
        <Sider style={themeColor === 'dark' ? (
          {
            backgroundColor: '#001529'
          }
        ) : (
          {
            backgroundColor: 'white'
          }
        )} trigger={null} collapsible collapsed={collapsed}>
          <div className="demo-logo-vertical" />
          <Menu
            theme={themeColor}
            mode="inline"
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
              },
              {
                key: '3',
                icon: <PlusCircleOutlined />,
                label: 'Add a question'
              }
            ]}
            onClick={({key}) => setKey(key)}
          />
        </Sider>
        <Layout style={themeColor === 'light' ? (
          {
            backgroundColor: 'black'
          }
        ) : (
          {
            backgroundColor: '#d7d7d7'
          }
        )}>
          <Header style={themeColor === 'light' ? (
            {
              backgroundColor: '#001529',
              color: 'white',
              padding: 0,
              display: 'flex',
              justifyContent: 'space-between'
            }
          ) : (
          {
            backgroundColor: 'white',
            color: '#001529',
            padding: 0,
            display: 'flex',
            justifyContent: 'space-between'
          }
            )}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={
               themeColor === 'dark' ? (
                 {
                   fontSize: '16px',
                   width: 64,
                   height: 64,
                   color: 'black'
                 }
               ) : (
                 {
                   fontSize: '16px',
                   width: 64,
                   height: 64,
                   color: 'white'
                 }
               )
              }
            />
            <SwitcherTheme setTheme={setThemeColor} theme={themeColor}/>
          </Header>
          <Content
            style={
              themeColor === 'light' ? (
                {
                  backgroundColor: '#001529',
                  color: 'white',
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                  borderRadius: borderRadiusLG,
                }
              ) : (
                {
                  backgroundColor: 'white',
                  color: '#001529',
                  margin: '24px 16px',
                  padding: 24,
                  minHeight: 280,
                  borderRadius: borderRadiusLG,
                }
              )}
          >
            {renderItems(key)}
          </Content>
        </Layout>
      </Layout>
    </>
  )
}