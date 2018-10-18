import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './style.css'

class Mycard extends Component {
  render () {
    const { data } = this.props
    return (
      <div className='card' onClick={() => this.props.history.push({ pathname: `/asset/${data.query_id}`, state: { text: '资产详情', data: data } })}>
        <div className='assetcard-title'>
          <span>资产编号：</span><span>{data.id}</span>
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
            <img src='/images/icons/sum_2.png'/>
            <span>{data.sum}</span>
          </div>
          <div className = "assetcard-footer-date">
            <img src='/images/icons/date_2.png'/>
            <span>{data.payDate ? data.payDate : '未填日期'}</span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Mycard)
