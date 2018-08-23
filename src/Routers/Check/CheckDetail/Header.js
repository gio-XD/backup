import React,{Component} from 'react';
import './style.css'


class Header extends Component {
  render(){
    return (
      <div className='checkdetail-header'>
        <div className='checkdetail-header-content'>
          <span className='checkdetail-header-left'>合同名称：</span>
          <span className='checkdetail-header-right'>2018年杨浦区中小学校个性化图书馆</span>
        </div>
        <div className='checkdetail-header-content'>
          <span className='checkdetail-header-left'>货物名称：</span>
          <span className='checkdetail-header-right'>图书馆自助还书服务系统</span>
        </div>
        <div className='checkdetail-header-content'>
          <span className='checkdetail-header-left'>发起验收日期：</span>
          <span className='checkdetail-header-right'>2018-5-7</span>
        </div>
      </div>
    )
  }
}


export default Header;
