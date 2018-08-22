import React,{Component} from 'react';
import './style.css'


class Header extends Component {
  render(){
    return (
      <div className='checkdetail-header'>
        发起验收名称：<br/>
        货物名称：<br/>
        发起验收日期：
      </div>
    )
  }
}


export default Header;
