import React, { Component } from 'react';
import {withRouter } from 'react-router';
import {Grid} from 'antd-mobile'
import {config} from './config'
import './Menu.css'


class Menu extends Component {
  render(){
    return(
          <div>
            <Grid
            data={config}
            hasLine={false}
            columnNum={3}
            onClick={(data)=> {this.props.history.push({ pathname: `/${data.path}`, state: {text:data.text } })}}
            renderItem={dataItem => (
              <div style={{ padding: '12.5px' }}>
                <img src={dataItem.icon} className={dataItem.text}   alt="" />
                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                  <span>{dataItem.text}</span>
                </div>
              </div>
            )}
          />
          </div>
    )
  }
}


export default withRouter(Menu);
