import React, { Component } from 'react'
import logo from './images/logo.jpg'
import { Form, Icon, Input, Button } from 'antd'
import './login.less'
// import { reqLogin } from '../../api'
import axios from 'axios'

/*
登录的路由组件
*/
class Login extends Component {
  handleSubmit = e => {
    // 组织事件的默认行为
    e.preventDefault()

    const BASE = 'http://localhost:5000'

    this.props.form.validateFields((err, values) => {
      const { username, password } = values
      if (!err) {
        axios
          .get(BASE + '/login', {
            params: {
              username,
              password
            }
          })
          .then()
          .catch()
      }
    })

    // this.props.form.validateFields((err, values) => {
    //   if (!err) {
    //     const { username, password } = values
    //     reqLogin(username, password)
    //       .then(response => {
    //         console.log('成功了', response.data)
    //       })
    //       .catch(error => {
    //         console.log('失败了', error)
    //       })
    //   } else {
    //     message.error(`验证失败`)
    //     console.log('校验失败!')
    //   }
    // })
  }

  /**
   * 对密码进行验证
   */
  validatorPwd = (rule, value, callback) => {
    if (!value) {
      callback('密码必须输入')
    } else if (value.length < 4) {
      callback('密码长度不能小于4位')
    } else if (value.length > 12) {
      callback('密码长度不能大于12位')
    } else if (/^[a-zA-Z0-9_]+&/.test(value)) {
      callback('密码必须由字母、数字、下划线组成')
    } else {
      callback() // 验证通过
    }
  }

  render() {
    // 得到强大功能的form对象
    const { getFieldDecorator } = this.props.form

    return (
      <div className="login">
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>React项目: 后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
          <Form onSubmit={this.handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                initialValue: 'admin',
                rules: [
                  {
                    required: true,
                    whitespace: true,
                    message: '用户名必须输入'
                  },
                  { min: 4, message: '用户名长度至少为4' },
                  { max: 12, message: '用户名长度最多为12' },
                  {
                    pattern: /^[a-zA-Z0-9_]+$/,
                    message: '用户名必须是英文、数字或下划线组成'
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="user" style={{ color: 'rgba(0, 0, 0, .25)' }} />
                  }
                  placeholder="用户名"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [
                  {
                    validator: this.validatorPwd
                  }
                ]
              })(
                <Input
                  prefix={
                    <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                  }
                  type="password"
                  placeholder="密码"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
              >
                登录
              </Button>
            </Form.Item>
          </Form>
        </section>
      </div>
    )
  }
}

const WrappedLogin = Form.create()(Login)

export default WrappedLogin
