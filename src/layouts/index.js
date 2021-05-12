// import styles from './index.css'
import { Layout } from 'antd';
import GlobalSider from '../components/GlobalSider'
import GlobalHeader from '../components/GlobalHeader'
import { connect } from 'react-redux';


const BasicLayout = (props) => {
  const { children } = props
  return (
    <Layout>
      {/* 左侧Menu start */}
      <GlobalSider></GlobalSider>
      {/* 左侧Menu end */}

      {/* 右侧 start */}
      <Layout>
        {/* 右侧头部 start */}
        <GlobalHeader></GlobalHeader>
        {/* 右则头部 end */}

        {/* 右侧内容 start */}
        <Layout.Content>
          { children }
        </Layout.Content>
        {/* 右侧内容 end */}
      </Layout>
      {/* 右则 end */}
    </Layout>
  )
}

export default BasicLayout;
