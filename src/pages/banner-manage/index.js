/**
 * Routes:
 *   - ./src/routes/privateRoute
 */
import axios from 'axios'
import React from 'react'
import {
  Table
} from 'antd'

import styles from './index.css'

class BannerManage extends React.Component {
  state ={
    bannersList: []
  }
  column = [
    {
      title: '序号',
      key: 'index',
      render: (col, row, index) => {
        return index + 1
      }
    },
    {
      title: '名称',
      key: 'name',
      dataIndex: 'name'
    },
    {
      title: '海报',
      key: 'imgUrl',
      render: (col, row) => {
        return (
          <img src={ row.imgUrl } alt="" 
            className={styles.img}
          />
        )
      }
    },
    {
      title: '操作',
      key: 'operation',
      render: () => {
        return <div>1</div>
      }
    }
  ]

  getBannerList = () => {
    const url = 'http://localhost:3000/api/banners'
    axios.get(url).then(response => {
      const { data: { data } } = response

      this.setState({
        bannersList: data.banners
      })
    })
  }

  render () {
    const { bannersList } = this.state
    return (
      <div className={styles.content}>
        <Table
          rowKey='_id'
          columns={this.column}
          dataSource={bannersList}
        >

        </Table>
      </div>
    )
  }

  componentDidMount() {
    this.getBannerList()
  }
}

export default BannerManage

