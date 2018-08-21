import React, { Component } from 'react';
import {TabBar} from 'antd-mobile';
import Menu from '../../Components/Menu/Menu';
import Mine from '../../Components/Mine'
import { HashRouter as Router } from "react-router-dom";
// import { Switch, Route } from 'react-router'


class Index extends Component {
  state={
    selectedTab:'menu'
  }
  render() {
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
             onPress={()=>{this.setState({
               selectedTab:'menu'
             });
             // window.location.href = `http://localhost:3000/#/menu`
              }}
             selected={this.state.selectedTab ==='menu'}
             >
              <Menu/>
             </TabBar.Item>
             <TabBar.Item
              badge={5}
              title='我发起的' key = 'mine'
              icon = {<div style={{
                     width: '22px',
                     height: '22px',
                     background: 'url(/images/tab/发起.png) center center /  21px 21px no-repeat' }}
                   />}
              selected={this.state.selectedTab ==='mine'}
              onPress={()=>{this.setState({
                selectedTab:'mine'
              });
              // window.location.href = `http://localhost:3000/#/cccc`
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
               dot
               title='待我审核' key = 'audit'
               icon = {<div style={{
                      width: '22px',
                      height: '22px',
                      background: 'url(/images/tab/审核.png) center center /  21px 21px no-repeat' }}
                    />}
               selected={this.state.selectedTab ==='audit'}
               onPress={()=>{this.setState({
                 selectedTab:'audit'
               });
               // window.location.href = `http://localhost:3000/#/cccc`
               }}
               selectedIcon={<div style={{
                          width: '22px',
                          height: '22px',
                          background: 'url(/images/tab/审核_.png) center center /  21px 21px no-repeat' }}
                        />}>
               <div>
                 <div>待我审核</div>
               </div>
               </TabBar.Item>
              <TabBar.Item
               title='我的' key = 'user'
               icon = {<div style={{
                  width: '22px',
                  height: '22px',
                  background: 'url(/images/tab/我的.png) center center /  21px 21px no-repeat' }}
                />}
               selected={this.state.selectedTab ==='user'}
               onPress={()=>{this.setState({
                 selectedTab:'user'
               })}}
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


export default Index
