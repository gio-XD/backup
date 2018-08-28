import React, { Component } from 'react';
import  '../style.css'


class MineCard extends Component{
  render(){
    const {title} = this.props;
    return(
          <div className='mine-card'>
            <div className='mine-card-title'><b>{title}</b></div>
            <div className='mine-card-listcontainer'>
              <div className='listitem2'><div className='left'>资产条数：10条</div><div className='right '>申请日期：2018年9月10日</div></div>
              <div className='listitem2'><div className='left'>资产条数：10条</div><div className='right '>申请日期：2018年9月10日</div></div>
                <div className='listitem2'><div className='left'>资产条数：10条</div><div className='right '>申请日期：2018年9月10日</div></div>
            </div>
          </div>
    )
  }
}


export default MineCard;
