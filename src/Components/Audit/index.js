import React, { Component } from 'react';
import {NavBar,Icon} from 'antd-mobile';
import AuditTabs from './AuditTabs'
import {withRouter } from 'react-router';
import './style.css';


class Audit extends Component{
  render(){
    return(
      <div className='minepage'>
        <NavBar
          className='NavBar'
          mode="light"
          animated={false}
          rightContent={[
           <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
           <Icon key="1" type="ellipsis" />,
         ]}
          >待我审核</NavBar>
        <AuditTabs {...this.props}/>
          {/* <Button className="refresh" onClick={()=>console.log('refresh')}/> */}
      </div>
    )
  }
}


export default withRouter(Audit)
