import React, { Component } from 'react';
import {withRouter } from 'react-router';
import {Grid} from 'antd-mobile'
import {config} from './config'


class Menu extends Component {
  render(){
    return(
          <div>
            <Grid
            data={config}
            hasLine={false}
            columnNum={3}
            onClick={(data)=> {this.props.history.push({ pathname: `/${data.path}`, state: {text:data.text } })}}/>
          </div>
    )
  }
}


export default withRouter(Menu);
