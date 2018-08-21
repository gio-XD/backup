import React, { Component } from 'react';
import {List} from 'antd-mobile';
import  './style.css'


class AttInfo extends Component{
  render(){
    return(
      <div  className='tabitem'>
        <List className='list'>
          <List.Item className='listitem'><div className='leftcontent'>附件名称：</div><div className='rightcontent'>资产名称</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>附件类型：</div><div className='rightcontent'>附件  </div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>附件编号：</div><div className='rightcontent'>20170210002</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>规格型号：</div><div className='rightcontent'>无</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>数量：</div><div className='rightcontent'>1</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>总价：</div><div className='rightcontent'>2018</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>备注：</div><div className='rightcontent'>xx</div></List.Item>
        </List>
      </div>
    )
  }
}


export default AttInfo;
