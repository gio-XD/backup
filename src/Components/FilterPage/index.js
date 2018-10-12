import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim'
import FilterSection from './FilterSection'
import { Tag } from 'antd-mobile'
import { Button } from 'antd';
import './FilterPage.css'

const ButtonGroup = Button.Group;

class FilterPage extends Component {
  state = {
        showSearchTab:false
      }
  componentWillReceiveProps(next, current){
    this.setState({
      showSearchTab:next.showSearchTab
    })
  }

  render(){
    return (
      <QueueAnim
        type='right'
        duration={200}
      >
      {this.state.showSearchTab ? (
        <div className='search-page' key='searchPage'>
        <div className='search-page-left' onClick={() => {this.setState({
          showSearchTab:false
        })}}>
        </div>
        <div className='search-page-content'>
          <FilterSection/>
            <ButtonGroup className='filter-btn-group'>
              <Button className='filter-reset-btn' size='large'>重置</Button>
              <Button className='filter-ok-btn' type='primary' size='large'>确认</Button>
            </ButtonGroup>
        </div>
      </div>) : null}
    </QueueAnim>
    )
  }
}

export default FilterPage
