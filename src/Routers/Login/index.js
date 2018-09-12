import React,{Component} from 'react'
import {List,InputItem,Button} from 'antd-mobile'
import {withRouter } from 'react-router'
import { connect } from 'react-redux'
import {wxConfig,wxLogin} from '../../Actions/asyncActions/wxActions'
import {odooLogin} from '../../Actions/asyncActions/login'
import './style.css'


class Login extends Component{
  constructor(props) {
      super(props)
      console.log(1);
      props.dispatch(wxConfig())
      if(window.location.href.split('?')[1])
      props.dispatch(wxLogin(window.location.href.split('?')[1].split('=')[1].split('&')[0]));
      this.state={
        username:undefined,
        password:undefined
      }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.loginStatus.status === 'success') {
      this.props.history.push('/index')
    }
  }


  render(){
    const handleClick = () => {
      const {username,password} = this.state
      let openid = this.props.loginStatus.openid || ''
      this.props.dispatch(odooLogin(username,password,openid))
    }
    return(
      <div className='loginpage'>
        <div className='login'>
          <List renderHeader={() => <div className='login' style={{fontSize:'32px',marginTop:'-80px'}}>Log In</div>}>
              <InputItem
                defaultValue=""
                placeholder="请输入用户名"
                onChange={(a)=>{this.setState({username:a})}}
              >用户名</InputItem>
              <InputItem
                defaultValue=""
                placeholder="请输入密码"
                onChange={(a)=>{this.setState({password:a})}}
              >密码</InputItem>
              <div className='loginbtn'><Button type='primary' onClick={()=>handleClick()} style={{borderRadius:'23.5px',width:'50%'}}>Log In</Button></div>
            </List>
        </div>
      </div>
    )
  }
}



export default withRouter(connect(state =>{return {loginStatus:state.loginStatus}})(Login));
