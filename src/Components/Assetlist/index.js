import React, { Component } from 'react';
import {WingBlank,WhiteSpace} from 'antd-mobile';

import Card from './Card'
import './style.css'


// const data = Array.from(new Array(10)).map((_,i)=>i);
class Index extends Component{
  //......
  render(){
    const {data} = this.props;
    console.log(data);
    return(
        <div>
          <WhiteSpace/>
          <WingBlank size='md'>
            {data.map((d,i)=><Card key={i} data={d}/>)}
          </WingBlank>
        </div>
    )
  }
}


export default Index;
