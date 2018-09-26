import React, { Component } from 'react';
import {TabBar} from 'antd-mobile';
import Menu from '../../Components/Menu/Menu';
import Mine from '../../Components/Mine';
import { connect } from 'react-redux';
import Audit from '../../Components/Audit';
import { HashRouter as Router } from "react-router-dom";
// import { Switch, Route } from 'react-router'


class Index extends Component {
  state={
    selectedTab:'menu',
    badge:5,
    dot:true

  }
  selectedTab = (tab) => {
  this.props.dispatch({type:'saveSelectedtab',payload:tab})
  }
  render() {
    const {selectedTab} = this.props;
    return(
      <div  style={{ position: 'fixed', height: '100%', width: '100%', top: 0,background:'white'} }>

        <TabBar
          tabBarPosition = 'bottom'
          tintColor="#33A3F4"
          >
             <TabBar.Item
             title='首页' key = 'menu'
             icon = {<div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(/images/tab/首页.png) center center /  21px 21px no-repeat' }}
                    />}
             selectedIcon={<div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(/images/tab/首页_.png) center center /  21px 21px no-repeat' }}
                    />}
             onPress={()=>{this.selectedTab('menu')}}
             selected={selectedTab ==='menu'}
             >
              <Menu/>
             </TabBar.Item>
             <TabBar.Item
              badge={this.state.badge}
              title='我发起的' key = 'mine'
              icon = {<div style={{
                     width: '22px',
                     height: '22px',
                     background: 'url(/images/tab/发起.png) center center /  21px 21px no-repeat' }}
                   />}
              selected={selectedTab ==='mine'}
              onPress={()=>{
                this.selectedTab('mine');
                this.setState({
                  badge:0
                })
              }}
              selectedIcon={<div style={{
                         width: '22px',
                         height: '22px',
                         background: 'url(/images/tab/发起_.png) center center /  21px 21px no-repeat' }}
                       />}>
              <div>
                <Mine/>

              </div>
              </TabBar.Item>
              <TabBar.Item
               dot={this.state.dot}
               title='待我审核' key = 'audit'
               icon = {<div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(/images/tab/审核.png) center center /  21px 21px no-repeat' }}
                    />}
               selected={selectedTab ==='audit'}
               onPress={()=>{
                 this.selectedTab('audit');
                 this.setState({
                   dot:false
                 })
               }}
               selectedIcon={<div style={{
                          width: '22px',
                          height: '22px',
                          background: 'url(/images/tab/审核_.png) center center /  21px 21px no-repeat' }}
                        />}>
               <div>
                 <Audit/>
               </div>
               </TabBar.Item>
              <TabBar.Item
               title='我的' key = 'user'
               icon = {<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(/images/tab/我的.png) center center /  21px 21px no-repeat' }}
                />}
               selected={selectedTab ==='user'}
               onPress={()=>{this.selectedTab('user')}}
               selectedIcon={<div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(/images/tab/我的_.png) center center /  21px 21px no-repeat' }}
                    />}>
                  <Router>
                    <div>我的</div>
                  </Router>
              </TabBar.Item>
          </TabBar>
        </div>
    )
  }
}


export default connect(state => {return {selectedTab:state.selectedTab}})(Index)
