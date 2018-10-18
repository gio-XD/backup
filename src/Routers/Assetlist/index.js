import React, { Component ,Fragment} from 'react';
import {NavBar,PullToRefresh  } from 'antd-mobile'
import {withRouter } from 'react-router';
import {Icon} from 'antd';
import Assetlist from '../../Components/Assetlist';
import FilterPage from '../../Components/FilterPage';
import SearchInput from '../../Components/SearchInput';
import { connect } from 'react-redux';
import * as MyActions from '../../Actions/asyncActions'

import  './style.css'


const searchKey ={
  '资产编号': 'asset_barcode',
  '资产名称': 'asset_name',
  '使用部门': 'office_id.name',
  '资产金额': 'asset_investment',
}

class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
      height:document.documentElement.clientHeight - 89, //列表高度
      showSearchTab:false
    }
  }
  componentWillMount(){
    const {dispatch,assetList} = this.props;
    // console.log(assetList);
    if(assetList.data.length === 0)
    dispatch(MyActions.query('','130',1,'query'))
    this.setState({
             user:2
           },function(){
             console.log("xxxxx")
           })
  }
  onFresh = () => {
    const {dispatch,assetList} = this.props;
    console.log(assetList.hasMore);
    if(!assetList.hasMore) return;
    console.log('isfetching');
    this.setState(
      {
      isfreshing:true
      }
    )

    dispatch(MyActions.query('','130',assetList.pageIndex,'fetch'))

    setTimeout(() => { //****************************
      this.setState({
        isfreshing:false
      })
    },1000)
  }
  render(){
    return (
      <div className='page'>
        <FilterPage showSearchTab = {this.state.showSearchTab} dispatch={this.props.dispatch}/>
        <div>
          <NavBar
            className='NavBar'
            mode="dark"
            leftContent={<Fragment>
                            <Icon type="left" theme="outlined" />
                            <span onClick={()=> this.props.history.goBack()}>{'返回'}
                            </span>
                          </Fragment>}
            >{this.props.location.state?this.props.location.state.text:'资产查询'}</NavBar>
            <SearchInput
              filterBtnOnClick = {() => {this.setState({
                showSearchTab:true
              })}}
              searchInputonSubmit={(a)=>{
                 let key = a.split("：")[0], value = a.split("：")[1]
                 key = searchKey[key]
                let word ='{\''+ key +'\''+ ':u\'' + value + '\'}'
                this.props.dispatch(MyActions.query(word,'130',1,'query'))}
              }
            />
        </div>
        <PullToRefresh
          direction="up"
          refreshing={this.props.isfreshing}
          onRefresh={this.onFresh}
          style={{height:this.state.height,overflowY:'scroll'}}
          >
          <Assetlist data={this.props.assetList.data}/>
        </PullToRefresh>

      </div>
    )
  }
}



export default withRouter( connect(state=>{return{assetList:state.assetList, isfreshing: state.global.loading}})(Index))
