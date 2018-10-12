import React , { Component } from 'react'
import { SearchBar } from 'antd-mobile'
import { AutoComplete,Input,Icon } from 'antd';
import './SearchInput.css'
class SearchInput extends Component {

  state = {
    dataSource: [],
  }

  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        '资产名称：'+value,
        '使用部门：'+value,
      ],
    });
  }

  render () {
    function onSelect(value) {
      console.log('onSelect', value);
    }
    return (
      <div className='search-input-container'>
        <AutoComplete
          className='search-input'
          dataSource={this.state.dataSource}
          onSelect={onSelect}
          onSearch={this.handleSearch}
        >
          <Input
            style= {{background:'#efeff4'}}
            placeholder="搜索您所需的资产"
            prefix={<Icon type="search" theme="outlined" />}
            suffix={<img src="/images/icons/scan.png" onClick={() => {console.log('scan');}}/>}
          />
        </AutoComplete>
        {/* <SearchBar
          className='search-input'
        placeholder="搜索您所需的资产"
        onSubmit={this.props.searchInputonSubmit}
        /> */}
        <div className='filter-btn' onClick={this.props.filterBtnOnClick}>
          <img className = 'filter-btn-icon' src = '/images/icons/filter.png'/>
          <span style={{marginLeft:'2px'}}>筛选</span>
        </div>
      </div>
    )

  }
}


export default SearchInput
