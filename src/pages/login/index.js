import {
  Form,
  Input,
  Icon,
  Button,
} from 'antd'
import styles from './index.css'

import { connect } from 'dva'

const Login = (props) => {
  const {
    getFieldDecorator,
    validateFields
  } = props.form

  const handleSubmit = (e) => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        props.asyncLogin(values)
      }
    })
  }

  return (
    <Form
      className={styles.form}
      onSubmit={ handleSubmit }
    >

      <Form.Item>
        {getFieldDecorator('email', {
          rules: [
            {
              required: true, 
              message: '请输入Email'
            },
            {
              type: 'email',
              message: '请输入正确的Email'
            }
          ]
        })(
          <Input 
            prefix={<Icon type="user"/>}
            placeholder="Email"
          />
        )}
      </Form.Item>

      <Form.Item>
        {getFieldDecorator('password', {
          rules: [
            { 
              required: true,
              message: '请输入Password',
            },
            {
              min: 6,
              max: 10,
              message: '密码为 6 到 10 位'
            }
          ]
        })(
          <Input
            prefix={<Icon type="lock"/>} 
            placeholder="password"
            type='password'
          />
        )}
      </Form.Item>

      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit"     
          block
        >
          登 录
        </Button>
      </Form.Item>
    
    </Form>
  )
}

export default connect(
  null,
  {
    asyncLogin(payload) {
      return {
        type: 'global/asyncLogin',
        payload
      }
    }
  }
)(Form.create()(Login))
