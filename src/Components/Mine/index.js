import React, { Component } from 'react';
import {Tabs,NavBar,Icon} from 'antd-mobile';
import Launch from './TabPages/Launch';
import Completed from './TabPages/Completed';
import Rejected from './TabPages/Rejected';
import {withRouter } from 'react-router';
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
          <Launch {...this.props}/>
          <Completed {...this.props}/>
          <Rejected {...this.props}/>
        </Tabs>
          {/* <Button className="refresh" onClick={()=>console.log('refresh')}/> */}

      </div>
    )
  }
}


export default withRouter(Mine)
