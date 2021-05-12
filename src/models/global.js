export default {
  state: {
    collapsed: false
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
    }
  }
}
