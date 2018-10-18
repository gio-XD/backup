import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { SwipeAction } from 'antd-mobile'
import { connect } from 'react-redux'
import * as MyActions from '../../Actions/asyncActions'
import './AssetCard.css'

class AssetCard extends Component {

  handleCardClick = (data) => {
    // this.props.history.push({ pathname: `/asset/${data.id}`, state: { text: '资产详情', data: data } })
    this.props.dispatch(MyActions.queryById(data))
  }

  render () {
    const { data } = this.props
    console.log(this.props);
    return (
      <SwipeAction
        style={{ backgroundColor: 'gray' }}
        autoClose
        right={[
          {
            text: ' 删 除 ',
            onPress: () => console.log('delete', data.id),
            style: { backgroundColor: '#FF980A', color: 'white', width: 60 }
          }
        ]}
      >
        <div className='assetcard-container'  onClick={() => this.handleCardClick(data)}>
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
      </SwipeAction>

    )
  }
}

export default withRouter(connect()(AssetCard))
