import React,{Component,Fragment} from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import {NavBar} from 'antd-mobile';
import Footer from './Footer'
import Content from './Content'
import * as MyActions from '../../Actions/asyncActions'


class Allocation extends Component{
  componentWillMount(){
    this.props.dispatch(MyActions.fetchAllocationData())
  }

  render(){
    const selectAll = (a) => {
      console.log('select all',a);
      this.props.dispatch(MyActions.HandleAllocationSelect({data:this.props.data,check:a},'saveAllocationData'))
    }
    return(
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0,background:'#f5f5f5'} }>
        <NavBar
          className='NavBar'
          mode="dark"
          leftContent={<span onClick={()=> this.props.history.goBack()}>{'<返回'}</span>}
          >调拨入账</NavBar>
        <Content {...this.props}/>
        <Footer onSelect={selectAll}/>

      </div>
    )
  }
}




export default withRouter(connect(state=>{return{data:state.allocationData}})(Allocation));
