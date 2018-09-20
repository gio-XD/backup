import React, { Component } from 'react';
import {NavBar,WhiteSpace,WingBlank} from 'antd-mobile';
import Card from '../../Components/Assetlist/Card.js';
import DetailTabs from '../../Components/Detailtabs';
import { StickyContainer, Sticky } from 'react-sticky';
import './style.css'

const Stickyitem = (props)=>{
  return(
    <Sticky>
    {({ style }) => <div style={style}>
      <NavBar
        className='NavBar'
        mode="dark"
        leftContent={<span onClick={()=> props.history.goBack()}>{'<返回'}</span>}
        >{props.location.state?props.location.state.text:'资产详情'}</NavBar>
        <WhiteSpace/>
        <WingBlank size='md'><Card noWhiteBlank={true} data={props.location.state.data}/></WingBlank>
    </div>}
  </Sticky>

  )
}

class Index extends Component{
  render(){
    return(
        <div className='page'>
          <StickyContainer>
              {Stickyitem(this.props)}
            <WingBlank size='md'>
              <WhiteSpace/>
              <DetailTabs data={this.props.location.state.data}/>
            </WingBlank>
          </StickyContainer>
        </div>
    )
  }
}


export default Index;
