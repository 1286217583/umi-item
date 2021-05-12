import styles from './index.css'
import { Icon, Menu, Layout } from 'antd'
import { connect } from 'dva'
import { Link, withRouter } from 'umi'

const GlobalSider = ({ collapsed, location: { pathname } }) => {
  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
    >
      <div className={styles.logo}></div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[pathname]}
      >

        <Menu.Item 
          key="/" 
        >
          <Link to='/'>
            <Icon type="home" theme="filled" />
            <span>Welcome</span>
          </Link>
        </Menu.Item>

        
        <Menu.Item
          key="/banner-manage"
        >
          <Link to='/banner-manage'>
            <Icon type="fire" theme="filled" />
            <span>nav 2</span>
          </Link>
        </Menu.Item>

      </Menu>
    </Layout.Sider>
  )
}

export default connect(
  ({ global }) => ({
    collapsed: global.collapsed
  })
)(withRouter(GlobalSider))
