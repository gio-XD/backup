import React , { Component, Fragment } from 'react'
import { Tag } from 'antd-mobile'
import './FilterPage.css'

const defaultTagdata = [
  {
    title:'年度',
    children:[
      {
        title:'2017',
        key:'2017'
      },
      {
        title:'2018',
        key:'2018'
      },
      {
        title:'更多',
        key:'more'
      }
    ]
  },
  {
    title:'支付',
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

class FilterSection extends Component {
  state= {
    selectedKeys:[]
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
        console.log(456);
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
          console.log(item.children.indexOf(key),item.children);
          return {
            section,
            children: item.children.splice(1 , 1)
          }
        }else {
          return item
        }
      })
    }
    console.log(keys);
    this.setState({
      selectedKeys:keys
    })
  }

  renderTag = (tagdata = defaultTagdata,section = '') => {
    // const {selectedKey} =this.state;
    return tagdata.map(data =>
      <Tag
        style = {{height:'30px',width:'31%',background:'#f5f5f5'}}
        //selected={selectedKey === data.key}
        onChange={(result)=> {this.handleSelect(result,data.key,section)}}
        >{data.title}</Tag>
    )
  }

  renderSection = (sectionData = defaultTagdata) => {
    return sectionData.map(data =>
      <div className='certain-category-search-tag'>
          <h4>{data.title}</h4>
          <div className='certain-category-search-tag-container'>
            {this.renderTag(data.children,data.title)}
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
