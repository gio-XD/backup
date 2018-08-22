import React,{Component} from 'react';
import {List} from 'antd-mobile'
import './style.css';


class Content extends Component{

  render (){
    return (
        <List className='list'>
          <List.Item className='listitem'><div className='leftcontent'>供应商</div><div className='rightcontent'>xxxx</div></List.Item>
          <List.Item className='listitem'><div className='leftcontent'>数量：</div><div className='rightcontent'>1  </div></List.Item>
        </List>
    )
  }
}

export default Content;
