import React, { Component } from 'react';
import AuditCard from '../AuditCard'
import  '../style.css'


class Launch extends Component{
  render(){
    return(
      <div className='tabpage'>
        <AuditCard title='资产处置'/>
        <AuditCard title='资产转移'/>
        <AuditCard title='金额变更'/>
        <AuditCard title='设备申请'/>
      </div>
    )
  }
}


export default Launch;
