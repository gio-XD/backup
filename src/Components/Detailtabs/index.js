import React, { Component } from 'react';
import {Tabs} from 'antd-mobile';
import BasicInfo from './BasicInfo';
import AttInfo from './AttInfo';
import ChangeRecord from './ChangeRecord';
import  './style.css'


class DetailTabs extends Component{
  renderTab(tab: Models.TabData){
    console.log(tab);
    let imgUrl = `/images/detailtab/${tab.sub}.png`;
    let className = `my-detail-tab-icon-${tab.sub}`;
    return (<div className='my-detail-tab'>
      {tab.title ==='变动记录' ? <div className='change-record-badge' ><span>99</span></div>  : null}
      <img className={className} src={imgUrl}/>
      <div className='my-detail-tab-title'>{tab.title}</div>
    </div>)
  }
  render(){
    const {data} = this.props;
    const tabs = [
      { title: '资产信息', sub: '1' },
      { title: '变动记录', sub: '2' },
      { title: '附件信息', sub: '3' },
    ];
    return(
      <div className='detail-tab-page'>
        <Tabs tabs={tabs}
          initialPage={'1'}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          renderTab={this.renderTab}
          tabBarActiveTextColor='black'
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
