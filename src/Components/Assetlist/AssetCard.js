import React, { Component } from 'react';
import {withRouter } from 'react-router';
import './AssetCard.css'



class AssetCard extends Component {

  render() {
      const {data} = this.props;
    return(
      <div className='assetcard-container' onClick={()=>this.props.history.push({pathname:`/asset/${data.id}`,state: {text:"资产详情",data:data }})}>
        <div className='assetcard-title'>
          <strong><span>资产编号：</span><span>{data.id}</span></strong>
        </div>
        <div className='assetcard-content'>
          <div className = 'assetcard-content-children'>
            <span>资产分类：</span><span>{data.category}</span>
          </div>
          <div className = 'assetcard-content-children'>
            <span>使用部门：</span><span>{data.department ? data.department : '-'}</span>
          </div>
        </div>
        <div className='assetcard-footer'>
          <div className = "assetcard-footer-sum">
            <img src='/images/icons/sum.png'/>
            <span>{data.sum}</span>
          </div>
          <div className = "assetcard-footer-date">
            <img src='/images/icons/date.png'/>
            <span>{data.payDate ? data.payDate : '未填日期'}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(AssetCard)
