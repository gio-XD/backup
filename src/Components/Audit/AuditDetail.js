import React, { Component } from 'react';
import {NavBar,Icon,Button} from 'antd-mobile';
import AuditTabs from './AuditTabs'
import {withRouter } from 'react-router';
import Assetlist from '../Assetlist'
import './style.css';


class AuditDetail extends Component{
  render(){

    const data =[
      {
        id:11,
        category:11,
        department:11,
        sum:11,
        payDate:11,
        assetName:11,
        count:11,
        keeper:11,
        type:11,
        source:11,
        remark:11
      },{
        id:22,
        category:22,
        department:22,
        sum:22,
        payDate:22,
        assetName:22,
        count:22,
        keeper:22,
        type:22,
        source:22,
        remark:22
      }
    ]
    return(
      <div className='minepage'>
        <NavBar
          className='NavBar'
          mode="light"
          rightContent={[
           <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
           <Icon key="1" type="ellipsis" />,
         ]}
          >待我审核</NavBar>
          <div className='tabpage'>
            <div className='mine-cardlist'>
              <div className='mine-title-card' style={{height:'10%'}}>
                <div className='mine-card-title'><b>资产处置</b></div>
                <div className='mine-card-listcontainer'>
                  <div className='listitem2' ><div className='left'>单据编号：CZ2187617</div><div className='right '>申请日期：2018年9月10日</div></div>
                </div>
              </div>
                <Assetlist data={data}/>
            </div>
            <div className='mine-agree-btn-group'>
              <Button style={{width:'25%',marginRight:'5px'}} type='primary'>同意</Button><Button style={{width:'25%',marginLeft:'5px'}} type='primary'>不同意</Button>
            </div>
          </div>
      </div>
    )
  }
}


export default withRouter(AuditDetail)
