import React, { Component } from 'react'
import QueueAnim from 'rc-queue-anim'
import FilterSection from './FilterSection'
import { Tag } from 'antd-mobile'
import { Button } from 'antd';
import './FilterPage.css'
import * as MyActions from '../../Actions/asyncActions'

const ButtonGroup = Button.Group;

class FilterPage extends Component {
  state = {
        showSearchTab:false,
        selectedKeys:[],
        sumRange:[null,null]
      }
  componentWillReceiveProps(next, current){
    this.setState({
      showSearchTab:next.showSearchTab
    })
  }

  handleSelect = (result, key, section) => {
    let keys = this.state.selectedKeys;
    if(!key || !section) return
    if (result) {
      if(!keys.some(item => item.section === section)){
        keys.push({
          section,
          children:[key]
        })
      } else {
        keys = keys.map(item => {
          if(item.section === section){
            let newChildren = item.children
            if(item.children.indexOf(key) === -1) newChildren.push(key)

            return {
              section,
              children: newChildren
            }
          }else {
            return item
          }
        })
      }
    } else {
      keys = keys.map(item => {
        if(item.section === section){
          item.children.splice(item.children.indexOf(key) , 1)
          return {
            section,
            children: item.children
          }
        }else {
          return item
        }
      })
    }
    this.setState({
      selectedKeys:keys
    })
  }

  handleInputChange = (val,key) => {

    switch (key) {
      case 'min':this.setState({
        sumRange:[val.length > 0 ? val : null , this.state.sumRange[1]]
      })
        break;
      case 'max':this.setState({
          sumRange:[this.state.sumRange[0] , val.length > 0 ? val : null]
      })

        break;
      default:
          this.setState({
            sumRange:[null,null]
          })
    }
  }

  onConfirm = () => {
    let minSum = this.state.sumRange[0] ,  maxSum = this.state.sumRange[1]
      const  filterData = [...this.state.selectedKeys]
    if(filterData.length === 0 && minSum === null && maxSum === null) return
    if(minSum !== null && maxSum !== null && minSum >maxSum){
      this.setState({
        sumRange:[maxSum, minSum]
      })
      maxSum = maxSum + minSum;
      minSum = maxSum - minSum;
      maxSum = maxSum - minSum;
    }
    if(minSum) filterData.push({section:'minSum', count: minSum})
    if(maxSum) filterData.push({section:'maxSum', count: maxSum})
    console.log(filterData);
    this.props.dispatch(MyActions.query(filterData,'130',1,'filter'))
  }
  onReset = () => {
    if( this.state.selectedKeys.length === 0 ) return
    console.log('reset');
    this.setState({selectedKeys:[]})
    this.props.dispatch(MyActions.query('','130',1,'query'))
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
          <FilterSection handleSelect={this.handleSelect} selectedKeys={this.state.selectedKeys} handleInputChange={this.handleInputChange} sumRange={this.state.sumRange}/>
            <ButtonGroup className='filter-btn-group'>
              <Button className='filter-reset-btn' size='large' onClick={this.onReset}>重置</Button>
              <Button className='filter-ok-btn' type='primary' size='large' onClick={this.onConfirm}>确认</Button>
            </ButtonGroup>
        </div>
      </div>) : null}
    </QueueAnim>
    )
  }
}

export default FilterPage
