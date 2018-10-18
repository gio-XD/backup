import React, { Component } from 'react'
import { List } from 'antd-mobile'
import './style.css'

class BasicInfo extends Component {
  render () {
    const { data } = this.props
    return (
      <div className='tabitem'>
        <List className='list'>
          <List.Item className='listitem'><div className='leftcontent'>资产名称：</div><div className='rightcontent'>{data.assetName}</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>数量：</div><div className='rightcontent'>{data.count}</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>保管人：</div><div className='rightcontent'>{data.keeper}</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>规格型号：</div><div className='rightcontent'>{data.type ? data.type : '-'}</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>资产来源：</div><div className='rightcontent'>{data.source}</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>入账日期：</div><div className='rightcontent'>{data.payDate}</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>存放地点：</div><div className='rightcontent'>{data.data.asset_position_id}</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>使用方向：</div><div className='rightcontent'>{data.data.use_purpose}</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>使用现状：</div><div className='rightcontent'>{data.data.asset_use_condition}</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>备注：</div><div className='rightcontent'>{data.remark}</div></List.Item>
        </List>
      </div>
    )
  }
}

export default BasicInfo
