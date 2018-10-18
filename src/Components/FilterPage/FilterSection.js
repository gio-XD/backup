import React , { Component, Fragment } from 'react'
import { Tag ,InputItem  } from 'antd-mobile'
import './FilterPage.css'


const date = new Date()
const defaultTagdata = [
  {
    title:'年度',
    key:'year',
    children:[
      {
        title:date.getFullYear()-1,
        key:date.getFullYear()-1
      },
      {
        title:date.getFullYear(),
        key:date.getFullYear()
      },
      {
        title:'更多...',
        key:'more'
      }
    ]
  },
  {
    title:'支付',
    key:'payment',
    children:[
      {
        title:'已完款',
        key:'hasPaid'
      },
      {
        title:'首付款',
        key:'firstPaid'
      },
      {
        title:'未付款',
        key:'hasNotPaid'
      }
    ]
  },
  {
    title:'审计',
    key:'aduit',
    children:[
      {
        title:'已审计',
        key:'hasAudited'
      },
      {
        title:'未审计',
        key:'hasNotAudited'
      },
      {
        title:'非审计',
        key:'notAudit'
      }
    ]
  }
]

const defaultTagdata2 = [
  {
    title:'资产属性',
    key:'asset_kind',
    children:[
      {
        title:'固定资产',
        key:'fixed_assets'
      },
      {
        title:'低值耐久',
        key:'low_durability'
      }
    ]
  },
  {
    title:'资产状态',
    key:'asset_state',
    children:[
      {
        title:' 已入账',
        key:'stock_in'
      },
      {
        title:' 已报废',
        key:'done'
      }
    ]
  },
  {
    title:'金额区间',
    key:'sum_range',
    children:'input'
  }
]

class FilterSection extends Component {

  judgeTagSelected(tagkey){
    const {selectedKeys} = this.props
    return JSON.stringify(selectedKeys).indexOf(tagkey) > -1
  }

  renderTag = (tagdata =[],section = '', key='') => {
    // const {selectedKey} =this.state;
    if(Array.isArray(tagdata)){
      return tagdata.map(data =>
        <Tag
          style = {{height:'30px',background:'#f5f5f5'}}
          selected={this.judgeTagSelected(data.key)}
          onChange={(result)=> {this.props.handleSelect(result,data.key,key)}}
          >{data.title}</Tag>
      )
    } else {
      const {sumRange} = this.props
      return  <Fragment>
                  <InputItem className = 'filter-input'
                    value={sumRange[0]}
                    style={{height:30}}
                    placeholder = '最低金额'
                    type='money'
                    onChange ={(val) => {this.props.handleInputChange(val,'min')}}/>
                  <span> - </span>
                  <InputItem className = 'filter-input'
                    value={sumRange[1]}
                    style={{height:30}}
                    placeholder = '最高金额'
                    type='money'
                    onChange ={(val) => {this.props.handleInputChange(val,'max')}}/>
              </Fragment>


    }

  }

  renderSection = (sectionData = defaultTagdata2) => {
    return sectionData.map(data =>
      <div className='certain-category-search-tag'>
          <h4>{data.title}</h4>
          <div className='certain-category-search-tag-container'>
            {this.renderTag(data.children,data.title, data.key)}
          </div>
      </div>
     )
  }

  render () {
    return (
      <Fragment>
        {this.renderSection()}
      </Fragment>
    )
  }
}


export default FilterSection
