import React,{Component} from 'react';
import { Route,Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';
import {NavBar} from 'antd-mobile';
import Allocation from './Allocation';
import AllocationDetail from './AllocationDetail'
import * as MyActions from '../../Actions/asyncActions'


class Index extends Component{
  componentWillMount(){
    if(this.props.data.length === 0)
    this.props.dispatch(MyActions.fetchAllocationData())
  }

  render(){
    return(
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0,background:'#f5f5f5'} }>
        <NavBar
          className='NavBar'
          mode="dark"
          leftContent={<span onClick={()=> this.props.history.goBack()}>{'<返回'}</span>}
          >{this.props.location.pathname === "/assetallocation/list" ?'调拨入账' : '调拨详情'}</NavBar>
          <Route path='/assetallocation' exact render={()=>(<Redirect to='/assetallocation/list'/>)}/>
          <Route path='/assetallocation/list'  render={()=>(<Allocation {...this.props}/>)}/>
          <Route path='/assetallocation/completedetail'  render={()=>(<AllocationDetail {...this.props}/>)}/>
      </div>
    )
  }
}




export default withRouter(connect(state=>{return{data:state.allocationData}})(Index));
