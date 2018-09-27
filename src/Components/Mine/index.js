import React, { Component } from 'react';
import {Tabs,NavBar,Icon} from 'antd-mobile';
import Launch from './TabPages/Launch';
import { connect } from 'react-redux';
import Completed from './TabPages/Completed';
import Rejected from './TabPages/Rejected';
import {withRouter } from 'react-router';
import {handleTabChange} from '../../Actions/asyncActions/global'
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
          page={this.props.config.tabIndex}
          //onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onChange={(tab,index) => {
            this.props.dispatch(handleTabChange(this.props.config.tabIndex,index,'mine'))
          }}
           renderTabBar={props => <Tabs.DefaultTabBar {...props} animated={true} />}
          tabBarUnderlineStyle={{height:'43.5px',background:'#a1adf3',border:'none',opacity:0.5}}
          animated={false}
          prerenderingSiblingsNumber={0}
          destroyInactiveTab={true}
        >
          <Launch key = '1' {...this.props}/>
          <Completed key = '2' {...this.props}/>
          <Rejected key = '3' {...this.props}/>
        </Tabs>
          {/* <Button className="refresh" onClick={()=>console.log('refresh')}/> */}

      </div>
    )
  }
}


export default withRouter(connect(state => {return {config:state.global.mine,test:state.global}})(Mine))
