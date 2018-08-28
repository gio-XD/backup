import React, { Component } from 'react';
import MineCard from '../MineCard';
import  '../style.css'


class Rejected extends Component{
  render(){
    return(
      <div className='tabpage'>
        <MineCard title='资产新增'/>
        <MineCard title='资产处置'/>
        <MineCard title='资产转移'/>
        <MineCard title='金额变更'/>
      </div>
    )
  }
}


export default Rejected;
