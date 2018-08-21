import React,{Component} from 'react';
// import {Button,WingBlank} from 'antd-mobile'
import { connect } from 'react-redux';
import Form from './Form.js'
import '../style.css'


class Step1 extends Component{

  render(){
    return(
      <div className='steppage'>
            <Form {...this.props}/>
      </div>
    )
  }
}


export default connect(state=>{return{formData:state.formData}})(Step1);
