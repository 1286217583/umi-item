
import styles from './index.css'
import {
  Layout,
  Icon,
  Dropdown,
  Menu,
  Avatar
} from 'antd'
import { connect } from 'dva'
const { Header } = Layout

// dva的connect修饰器 在 class 类上面使用
// @connect(
//   ({ global }) => ({
//     collapsed: global.collapsed
//   }),

//   (dispath) => {
//     return {
//       setCollapsed () {
//         dispath({
//           type: 'global/toggleCollapsed'
//         })
//       }
//     }
//   }
// )
const headerMenu = (
  <Menu>
    <Menu.Item onClick={() => {
      window.localStorage.removeItem('userInfo')
      window.location.reload();
    }}>
      <Icon type='logout' />
      <span>退出登录</span>
    </Menu.Item>
  </Menu>
)

const GlobalHeader = ({
  collapsed,
  setCollapsed,
  userInfo
}) => {
  return (
    <Header
      className={ styles.header }
    >
      <Icon
        className={ styles.trigger }
        type={
          collapsed ? 'menu-unfold' : 'menu-fold'
        }
        onClick={() => {
          setCollapsed()
        }}
      />

      <div className={styles.right}>
        <Dropdown overlay={ headerMenu }>
          <div className={styles.user}>
            <Avatar
            size={30}
            icon='user'
            ></Avatar>

            <p>{ userInfo && userInfo.nickname }</p>
          </div>
        </Dropdown>
      </div>
    </Header>
  )
}

export default connect(
  ({ global }) => ({
    collapsed: global.collapsed,
    userInfo: global.userInfo
  }),
  (dispatch) => {
    return {
      setCollapsed () {
        dispatch({
          type: 'global/toggleCollapsed'
        })
      }
    }
  }
  // {
  //   setCollapsed () {
  //     return {
  //       type: 'global/toggleCollapsed',
  //     }
  //   }
  // }
)(GlobalHeader)
