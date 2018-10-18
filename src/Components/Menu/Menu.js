import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Grid } from 'antd-mobile'
import { getCookie } from '../../utils/cookie'
import { config } from '../../configs/menus'
import './Menu.css'

class Menu extends Component {
  constructor (props) {
    super(props)
    let mymenu = config; let access = props.access || JSON.parse(getCookie('response')).access
    if (Array.isArray(access)) {
      mymenu = mymenu.filter(data => {
        return access.indexOf(data.key) > -1
      })
    }

    this.state = {
      menuData: mymenu
    }
  }

  render () {
    console.log(this.props.access)
    return (
      <div>
        <Grid
          data={this.state.menuData}
          hasLine={false}
          columnNum={3}
          onClick={(data) => { this.props.history.push({ pathname: `/${data.path}`, state: { text: data.text } }) }}
          renderItem={dataItem => (
            <div style={{ padding: '12.5px' }}>
              <img src={dataItem.icon} className={dataItem.text} alt="" />
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

export default withRouter(Menu)
