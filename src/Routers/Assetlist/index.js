import React, { Component } from 'react';
import {NavBar,SearchBar} from 'antd-mobile'
import {withRouter } from 'react-router';
import { StickyContainer, Sticky } from 'react-sticky';
import Assetlist from '../../Components/Assetlist';
import { connect } from 'react-redux';
import * as MyAtions from '../../Actions/asyncActions'
import  './style.css'



const Stickyitem = (props)=>{
  const {dispatch} = props;
  return(
    <Sticky>
    {({ style }) => <div style={style}>
      <NavBar
        className='NavBar'
        mode="dark"
        leftContent={<span onClick={()=> props.history.goBack()}>{'<返回'}</span>}
        >{props.location.state?props.location.state.text:'资产查询'}</NavBar>
        <SearchBar
        placeholder="搜索您所需的资产"
        onSubmit={(a)=>{dispatch(MyAtions.query(a,'130','query'))}}
      />
    </div>}
  </Sticky>

  )
}

class Index extends Component{
  componentWillMount(){
    const {dispatch,state} = this.props;
    console.log(this.props);
    if(state.assetList.length ===0)
    dispatch(MyAtions.query('','130','query'))
  }
  render(){
    return (
      <div className='page'>
        <StickyContainer>
          {Stickyitem(this.props)}
          <Assetlist data={this.props.state.assetList}/>
        </StickyContainer>

      </div>
    )
  }
}



export default withRouter( connect(state=>{return{state:state}})(Index))
