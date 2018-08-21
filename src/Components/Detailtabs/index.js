import React, { Component } from 'react';
import {Tabs} from 'antd-mobile';
import BasicInfo from './BasicInfo';
import AttInfo from './AttInfo';
import ChangeRecord from './ChangeRecord';
import  './style.css'


class DetailTabs extends Component{
  render(){
    const {data} = this.props;
    const tabs = [
      { title: '基本信息', sub: '1' },
      { title: '变动记录', sub: '2' },
      { title: '附件信息', sub: '3' },
    ];
    return(
      <div className='page1'>
        <Tabs tabs={tabs}
          tabBarTextStyle={{fontSize:'17px'}}
          initialPage={'1'}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <BasicInfo data={data}/>
          <ChangeRecord data={data}/>
          <AttInfo data={data}/>
        </Tabs>
      </div>
    )
  }
}




export default DetailTabs;
