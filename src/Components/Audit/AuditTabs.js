import React, { Component } from 'react';
import {Tabs} from 'antd-mobile';
import Launch from './TabPages/Launch';
import { connect } from 'react-redux';
import Completed from './TabPages/Completed';
import Rejected from './TabPages/Rejected';
import {handleTabChange} from '../../Actions/asyncActions/global'
import './style.css';


class AuditTabs extends Component{


  render(){
    const tabs = [
      { title: '待审批', sub: '1' },
      { title: '已完成', sub: '2' },
      { title: '已退回', sub: '3' },
    ];
    return(

        <Tabs tabs={tabs}
          tabBarTextStyle={{fontSize:'17px'}}
          page={this.props.config.tabIndex}
          //onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onChange={(tab, index) => {
            this.props.dispatch(handleTabChange(this.props.config.tabIndex,index,'audit'))
          }}
           renderTabBar={props => <Tabs.DefaultTabBar {...props} animated={true} />}
          tabBarUnderlineStyle={{height:'43.5px',background:'#a1adf3',border:'none',opacity:0.5}}
          animated={false}
          prerenderingSiblingsNumber={0}
          destroyInactiveTab={true}
        >
          <Launch {...this.props}/>
          <Completed {...this.props}/>
          <Rejected {...this.props}/>
        </Tabs>
    )
  }
}

export default connect(state => {return{config:state.global.audit}})(AuditTabs)
