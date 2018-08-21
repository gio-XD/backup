import React, { Component } from 'react';
import {Tabs,NavBar,Icon,Button} from 'antd-mobile';
import Launch from './Launch';
import Completed from './Completed';
import Rejected from './Rejected';
import './style.css';


class Mine extends Component{


  render(){
    const tabs = [
      { title: '待审批', sub: '1' },
      { title: '已完成', sub: '2' },
      { title: '已退回', sub: '3' },
    ];
    return(
      <div className='minepage'>
        <NavBar
          className='NavBar'
          mode="light"
          rightContent={[
           <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
           <Icon key="1" type="ellipsis" />,
         ]}
          >我发起的</NavBar>
        <Tabs tabs={tabs}
          tabBarTextStyle={{fontSize:'17px'}}
          initialPage={'1'}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
          tabBarUnderlineStyle={{height:'43.5px',background:'#a1adf3',border:'none',opacity:0.5}}
        >
          <Launch/>
          <Completed/>
          <Rejected/>
        </Tabs>
          <Button className="refresh" onClick={()=>console.log('refresh')}/>

      </div>
    )
  }
}


export default Mine
