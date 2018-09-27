import React, { Component } from 'react';
import AuditCard from '../AuditCard';
import  '../style.css'
import QueueAnim from 'rc-queue-anim'

class Rejected extends Component{
  render(){
    return(
      <div className='tabpage'>
        <QueueAnim
          type={[this.props.config.direction,'alpha']}
          >
            <AuditCard key = '1' title='资产处置' {...this.props}/>
            <AuditCard key = '2' title='资产转移' {...this.props}/>
            <AuditCard key = '3' title='金额变更' {...this.props}/>
            <AuditCard key = '4' title='设备申请' {...this.props}/>
        </QueueAnim>

      </div>
    )
  }
}


export default Rejected;
