import React,{Component} from 'react';
import {Button,Radio} from 'antd-mobile';
import './Footer.css';


class Footer extends Component{

  render(){
    return(
      <div className='allocation-footer'>
        <div className='radio-container' ><Radio className="my-radio" checked={true} >全选</Radio></div>
        <div style={{width:'40%'}}></div>
        <Button type='primary' className='allocation-btn' >入账</Button>
      </div>
    )
  }
}


export default Footer;
