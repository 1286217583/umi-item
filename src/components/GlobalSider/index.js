import styles from './index.css'
import { Icon, Menu, Layout } from 'antd'
import { connect } from 'dva'

const GlobalSider = ({ collapsed }) => {
  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
    >
      <div className={styles.logo}></div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
      >

        <Menu.Item 
          key="1" 
        >
          <Icon type='user' />
          <span>nav 1</span>
        </Menu.Item>

        <Menu.Item
          key="2"
        >
          <Icon type='video-camera' />
          <span>nav 2</span>
        </Menu.Item>

        <Menu.Item 
          key="3"
        >
          <Icon type='upload' />
          <span>nav 3</span>
        </Menu.Item>

      </Menu>
    </Layout.Sider>
  )
}

export default connect(
  ({ global }) => ({
    collapsed: global.collapsed
  })
)(GlobalSider)
