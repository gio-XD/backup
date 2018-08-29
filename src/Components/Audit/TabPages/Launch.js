import React, { Component } from 'react';
import AuditCard from '../AuditCard'
import  '../style.css'


class Launch extends Component{
  render(){
    return(
      <div className='tabpage'>
        <AuditCard title='资产处置' {...this.props}/>
        <AuditCard title='资产转移' {...this.props}/>
        <AuditCard title='金额变更' {...this.props}/>
        <AuditCard title='设备申请' {...this.props}/>
      </div>
    )
  }
}


export default Launch;
