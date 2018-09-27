import React, { Component } from 'react';
import MineCard from '../MineCard';
import  '../style.css'
import QueueAnim from 'rc-queue-anim'

class Rejected extends Component{
  render(){
    return(
      <div className='tabpage'>
        <QueueAnim
          type={[this.props.config.direction,'alpha']}
        >
          <MineCard key='1' title='资产新增'/>
          <MineCard key='2' title='资产处置'/>
          <MineCard key='3' title='资产转移'/>
          <MineCard key='4' title='金额变更'/>
        </QueueAnim>
      </div>
    )
  }
}


export default Rejected;
