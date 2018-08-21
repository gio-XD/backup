import React,{Component} from 'react';
// import {List,InputItem,Button,WingBlank} from 'antd-mobile'
import Form from './Form.js'
import { connect } from 'react-redux';
import '../style.css'


class Step2 extends Component{
  render(){
    return(
      <div className='steppage'>
            <Form {...this.props}/>
      </div>
    )
  }
}


export default connect(state=>{return{formData:state.formData}})(Step2)
