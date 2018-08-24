import React,{Component} from 'react';
import {Button,Checkbox} from 'antd-mobile';
import './Footer.css';


class Footer extends Component{

  render(){
    return(
      <div className='allocation-footer'>
        <div className='radio-container' ><Checkbox className="my-radio"  >全选</Checkbox></div>
        <div style={{width:'40%'}}></div>
        <Button type='primary' className='allocation-btn' >入账</Button>
      </div>
    )
  }
}


export default Footer;
