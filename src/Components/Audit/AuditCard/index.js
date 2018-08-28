import React, { Component } from 'react';
import  '../style.css'


class AuditCard extends Component{
  render(){
    const {title} = this.props;
    return(
          <div className='mine-card'>
            <div className='mine-card-title'><b>{title}</b></div>
            <div className='mine-card-listcontainer'>
              <div className='listitem2'><div className='left'>单据编号：CZ2187617</div><div className='right '>申请日期：2018年9月10日</div></div>
              <div className='listitem2'><div className='left'>单据编号：CZ2187617</div><div className='right '>申请日期：2018年9月10日</div></div>
                <div className='listitem2'><div className='left'>单据编号：CZ2187617</div><div className='right '>申请日期：2018年9月10日</div></div>
            </div>
          </div>
    )
  }
}


export default AuditCard;
