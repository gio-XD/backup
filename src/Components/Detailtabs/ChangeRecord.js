import React, { Component } from 'react';
import {List} from 'antd-mobile';
import  './style.css'


class ChangeRecord extends Component{
  render(){
    return(
      <div  className='tabitem'>
        <List className='list'>
          <List.Item className='listitem'><div className='leftcontent'>变动字段：</div><div className='rightcontent'>资产名称</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>变动前值：</div><div className='rightcontent'>1</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>变动后值：</div><div className='rightcontent'>张三</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>变动日期：</div><div className='rightcontent'>2018-03-15</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>变动人：</div><div className='rightcontent'>张三</div></List.Item>
        </List>
      </div>
    )
  }
}


export default ChangeRecord;
