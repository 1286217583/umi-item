
import styles from './index.css'
import { Layout, Icon } from 'antd'
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

const GlobalHeader = ({
  collapsed,
  setCollapsed
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
    </Header>
  )
}

export default connect(
  ({ global }) => ({
    collapsed: global.collapsed
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
