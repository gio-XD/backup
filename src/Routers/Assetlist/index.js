import React, { Component } from 'react';
import {NavBar,SearchBar,PullToRefresh ,Tag } from 'antd-mobile'
import {withRouter } from 'react-router';
import Assetlist from '../../Components/Assetlist';
import FilterPage from '../../Components/FilterPage';
import SearchInput from '../../Components/SearchInput';
import { connect } from 'react-redux';
import * as MyAtions from '../../Actions/asyncActions'

import  './style.css'


class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
      height:document.documentElement.clientHeight - 89, //列表高度
      isfreshing : false,
      showSearchTab:false
    }
  }
  componentWillMount(){
    const {dispatch,assetList} = this.props;
    // console.log(assetList);
    if(assetList.data.length === 0)
    dispatch(MyAtions.query('','130',1,'fresh'))
  }
  onFresh = () => {
    const {dispatch,assetList} = this.props;
    console.log(assetList.hasMore);
    if(!assetList.hasMore) return;
    console.log('isfetching');
    this.setState({
      isfreshing:true
    })
    dispatch(MyAtions.query('','130',assetList.pageIndex,'fetch'))

    setTimeout(() => {
      this.setState({
        isfreshing:false
      })
    },1000)
  }
  render(){
    return (
      <div className='page'>
        {console.log(this.state.showSearchTab)}
        <FilterPage showSearchTab = {this.state.showSearchTab}/>
        <div>
          <NavBar
            className='NavBar'
            mode="dark"
            leftContent={<span onClick={()=> this.props.history.goBack()}>{'<返回'}</span>}
            >{this.props.location.state?this.props.location.state.text:'资产查询'}</NavBar>
            <SearchInput
              filterBtnOnClick = {() => {this.setState({
                showSearchTab:true
              })}}
              searchInputonSubmit={(a)=>{this.props.dispatch(MyAtions.query(a,'130',1,'query'))}}
            />
        </div>
        <PullToRefresh
          direction="up"
          refreshing={this.state.isfreshing}
          onRefresh={this.onFresh}
          style={{height:this.state.height,overflowY:'scroll'}}
          >
          <Assetlist data={this.props.assetList.data}/>
        </PullToRefresh>

      </div>
    )
  }
}



export default withRouter( connect(state=>{return{assetList:state.assetList}})(Index))
