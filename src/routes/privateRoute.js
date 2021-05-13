import { connect } from 'dva'
import { Fragment } from 'react'
import { Redirect } from 'umi'

const PrivateRoute = ({ userInfo, children }) => {
  if (userInfo) {
    return (
      <Fragment>
        { children }
      </Fragment>
    )
  }

  return <Redirect to='login'></Redirect>
}

export default connect(
  ({ global }) => ({
    userInfo: global.userInfo
  })
)(PrivateRoute)
