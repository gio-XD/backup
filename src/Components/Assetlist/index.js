import React, { Component,Fragment } from 'react';
import AssetCard from './AssetCard'
import {WhiteSpace} from 'antd-mobile';
import Card from './Card'
import './style.css'

class Index extends Component{
  render(){
    const {data} = this.props;
    console.log(data);
    return(
          <Fragment>
            <WhiteSpace/>
            {data.map((d,i)=><AssetCard key={i} data={d}/>)}
        </Fragment>
    )
  }
}


export default Index;
