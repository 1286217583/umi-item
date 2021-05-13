import axios from 'axios'
import { message } from 'antd'
import { router } from 'umi'

const userInfo = window.localStorage.getItem('userInfo')

export default {
  state: {
    collapsed: false,
    userInfo: userInfo ? JSON.parse(userInfo) : null
  },

  effects: {
    *asyncLogin(action, { put }) {
      const url = 'http://localhost:3000/api/sign-in'
      const { data } = yield axios.post(url, action.payload)

      if (data.code === 0) {
        yield put({ type: 'login', userInfo: data.data.userInfo })

        message.success('登录成功', 2, () => {
          router.replace('/')
        })

        
      } else {
        message.error(data.msg)
      }
    }
  },

  reducers: {
    /**
     * 切换菜单栏的显隐
     */
    toggleCollapsed (state, action) {
      return {
        ...state,
        collapsed: !state.collapsed
      }
    },

    /**
     * 用户登录
     */
    login (state, action) {
      window.localStorage.setItem('userInfo', JSON.stringify(action.userInfo))
      return {
        ...state,
        userInfo: action.userInfo
      }
    }

  }
}
