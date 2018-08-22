import React,{Component} from 'react';
import './style.css';


class Header extends Component{

  render(){
    return (
      <div className='checkcard-title'>
        <div className='checkcard-title-left'><span>contact</span></div>
        <div className='checkcard-title-right'><span>company</span></div>
      </div>
    )
  }
}

export default Header;
