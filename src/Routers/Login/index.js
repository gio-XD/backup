import React,{Component} from 'react'
import {List,InputItem,Button} from 'antd-mobile'
import './style.css'

class Login extends Component{
  render(){
    return(
      <div className='loginpage'>
        <div className='login'>
          <List renderHeader={() => <div className='login' style={{fontSize:'32px',marginTop:'-80px'}}>Log In</div>}>
              <InputItem
                defaultValue=""
                placeholder="please input Username"
                onChange={(a)=>{this.setState({username:a})}}
              >用户名</InputItem>
              <InputItem
                defaultValue=""
                placeholder="please input password"
                onChange={(a)=>{this.setState({password:a})}}
              >密码</InputItem>
              <div className='loginbtn'><Button type='primary' onClick={()=>console.log(this.state)} style={{borderRadius:'23.5px',width:'50%'}}>Log In</Button></div>
            </List>
        </div>
      </div>
    )
  }
}



export default Login;
