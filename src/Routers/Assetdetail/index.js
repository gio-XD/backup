import React, { Component } from 'react'
import { NavBar } from 'antd-mobile'
import { connect } from 'react-redux'
import Card from '../../Components/Assetlist/Card.js'
import DetailTabs from '../../Components/Detailtabs'
import * as MyActions from '../../Actions/asyncActions'
import './style.css'

class Index extends Component {
  constructor (props) {
    super(props)
    console.log(props.location.pathname)
    props.dispatch(MyActions.query('', '130', 1, 'fetchDetail', props.location.pathname.split('/')[1]))
  }
  render () {
    console.log(this.props.data)
    return (
      <div className='page'>
        <NavBar
          className='NavBar'
          mode="dark"
          leftContent={<span onClick={() => this.props.history.goBack()}>{'<返回'}</span>}
        >资产详情</NavBar>
        <Card data={this.props.data}/>
        <DetailTabs data={this.props.data}/>

      </div>
    )
  }
}

export default connect(state => { return { data: state.assetList.assetDetail } })(Index)
