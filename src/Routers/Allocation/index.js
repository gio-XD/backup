import React,{Component} from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import {NavBar,WhiteSpace,ListView} from 'antd-mobile';
import Footer from './Footer'
import Content from './Content'


class Allocation extends Component{

  render(){
    return(
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0,background:'#f5f5f5'} }>
        <NavBar
          className='NavBar'
          mode="dark"
          leftContent={<span onClick={()=> this.props.history.goBack()}>{'<返回'}</span>}
          >调拨入账</NavBar>
        <Content/>
        <Footer/>

      </div>
    )
  }
}




export default withRouter(connect()(Allocation));
