import React, { Component,Fragment } from 'react';
import {WingBlank} from 'antd-mobile';

import Card from './Card'
import './style.css'


// const data = Array.from(new Array(10)).map((_,i)=>i);
class Index extends Component{
  render(){
    const {data} = this.props;
    return(
          <Fragment>
          <WingBlank size='md'>
            {data.map((d,i)=><Card key={i} data={d}/>)}
          </WingBlank>
        </Fragment>
    )
  }
}


export default Index;
