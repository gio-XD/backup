import React, { Component, Fragment } from 'react'
import AssetCard from './AssetCard'
import { WhiteSpace } from 'antd-mobile'
import './style.css'

class Index extends Component {
  render () {
    const { data } = this.props
    return (
      <Fragment>
        <WhiteSpace size='lg'/>
        {data.map((d, i) => <AssetCard key={i} data={d}/>)}
      </Fragment>
    )
  }
}

export default Index
