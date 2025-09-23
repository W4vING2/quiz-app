import { Button, Layout, Menu, theme } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PlusCircleOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import React, { useCallback, useMemo, useState } from 'react'
import { RenderItems } from '../utils/RenderItems.jsx'
import SwitcherTheme from '../components/SwitcherTheme/SwitcherTheme.jsx'
import { useTheme } from '../hooks/useTheme.js'

export default function LayoutComponent() {
  const [collapsed, setCollapsed] = useState(false)
  const { themeColor, setThemeColor } = useTheme()
  const [key, setKey] = useState('1')
  const { Header, Sider, Content } = Layout
  const {
    token: { borderRadiusLG },
  } = theme.useToken()

  const renderedItems = useMemo(() => {
    return <RenderItems keyValue={key} />
  }, [key])

  const siderStyle = useMemo(
    () => ({
      backgroundColor: themeColor === 'dark' ? '#001529' : 'white',
    }),
    [themeColor],
  )

  const headerStyle = useMemo(
    () => ({
      backgroundColor: themeColor === 'light' ? '#001529' : 'white',
      color: themeColor === 'light' ? 'white' : '#001529',
      padding: 0,
      display: 'flex',
      justifyContent: 'space-between',
    }),
    [themeColor],
  )

  const contentStyle = useMemo(
    () => ({
      backgroundColor: themeColor === 'light' ? '#001529' : 'white',
      color: themeColor === 'light' ? 'white' : '#001529',
      margin: '24px 16px',
      padding: 24,
      minHeight: 280,
      borderRadius: borderRadiusLG,
    }),
    [themeColor, borderRadiusLG],
  )

  return (
    <>
      <Layout
        style={{
          height: '100dvh',
        }}
      >
        <Sider
          style={siderStyle}
          trigger={null}
          collapsible
          collapsed={collapsed}
        >
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
                label: 'Add a question',
              },
            ]}
            onClick={useCallback(({ key }) => setKey(key), [])}
          />
        </Sider>
        <Layout
          style={{
            backgroundColor: { themeColor } === 'dark' ? '#001529' : '#c9c9c9',
          }}
        >
          <Header style={headerStyle}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={
                themeColor === 'dark'
                  ? {
                      fontSize: '16px',
                      width: 64,
                      height: 64,
                      color: 'black',
                    }
                  : {
                      fontSize: '16px',
                      width: 64,
                      height: 64,
                      color: 'white',
                    }
              }
            />
            <SwitcherTheme setTheme={setThemeColor} theme={themeColor} />
          </Header>
          <Content style={contentStyle}>{renderedItems}</Content>
        </Layout>
      </Layout>
    </>
  )
}
