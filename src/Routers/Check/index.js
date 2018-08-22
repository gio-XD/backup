import React,{Component} from 'react';
import { Route,withRouter } from 'react-router';
import { connect } from 'react-redux';
import {NavBar,WhiteSpace} from 'antd-mobile';
import TabPage from './TabPage';
import CheckDetail from './CheckDetail';
import './style.css';

class Check extends Component{

  render(){


    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0,background:'#f5f5f5'} }>
        <NavBar
          className='NavBar'
          mode="dark"
          leftContent={<span onClick={()=> this.props.history.goBack()}>{'<返回'}</span>}
          >验收查询</NavBar>

            <div className='check-tab-container'>
              <WhiteSpace/>
              <Route path='/checksearch' exact  render={()=>(<TabPage {...this.props}/>)}/>
              <Route path='/checksearch/:id'   render={()=>(<CheckDetail {...this.props}/>)}/>
            </div>
      </div>
    )
  }
}




export default withRouter(connect()(Check))
