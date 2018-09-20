import React, { Component } from 'react';
import {NavBar,SearchBar,PullToRefresh } from 'antd-mobile'
import {withRouter } from 'react-router';
import Assetlist from '../../Components/Assetlist';
import { connect } from 'react-redux';
import * as MyAtions from '../../Actions/asyncActions'
import  './style.css'


class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
      height:document.documentElement.clientHeight - 89, //列表高度
      isfreshing : false,
    }
  }
  componentWillMount(){
    const {dispatch,assetList} = this.props;
    console.log(assetList);
    if(assetList.data.length === 0)
    dispatch(MyAtions.query('','130','query',1,'fetch'))
  }
  onFresh = () => {
    const {dispatch,assetList} = this.props;
    this.setState({
      isfreshing:true
    })
    dispatch(MyAtions.query('','130','query',assetList.pageIndex,'fetch'))

    setTimeout(() => {
      this.setState({
        isfreshing:false
      })
    },1000)
  }
  render(){
    return (
      <div className='page'>
        <div>
          <NavBar
            className='NavBar'
            mode="dark"
            leftContent={<span onClick={()=> this.props.history.goBack()}>{'<返回'}</span>}
            >{this.props.location.state?this.props.location.state.text:'资产查询'}</NavBar>
            <SearchBar
            placeholder="搜索您所需的资产"
            onSubmit={(a)=>{this.props.dispatch(MyAtions.query(a,'130','query',1,'query'))}}
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
