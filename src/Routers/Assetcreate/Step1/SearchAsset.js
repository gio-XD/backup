import React,{Component,Fragment} from 'react';
import { AutoComplete ,Input,Icon} from 'antd';
import { connect } from 'react-redux';
import {NavBar,Tag} from 'antd-mobile';
import * as MyActions from '../../../Actions/Actions';
import 'antd/dist/antd.css';
import './SearchAsset.css'

const defaultTagdata = [
  {
    title:'资产aaaa',
    key:'aaa'
  },
  {
    title:'资产bbbb',
    key:'bbb'
  },
  {
    title:'资产cccc',
    key:'ccc'
  },
  {
    title:'资产dddd',
    key:'ddd'
  },
  {
    title:'资产eeee',
    key:'eee'
  },
]


class SearchAsset extends Component{
  state ={
    defaultValue:this.props.formData.category?this.props.formData.category : undefined,
    selectedKey:null
  }
  onSelect = (val) => {
    console.log(val);
    this.props.dispatch(MyActions.saveForm({category:val}))
    this.props.history.goBack()
  }

  onChange = (selected,key) => {
    if(selected){
      this.setState({
        selectedKey:key,
        defaultValue:key
      })
      this.props.dispatch(MyActions.saveForm({category:key}))
    }
    return
  }

  renderTag = (tagdata = defaultTagdata) => {
    const {selectedKey} =this.state;
    return tagdata.map(data =>
      <Tag
        selected={selectedKey === data.key}
        onChange={(key)=> {this.onChange(key,data.key)}}
        >{data.title}</Tag>
    )
  }
  render(){

    const Option = AutoComplete.Option,
          OptGroup = AutoComplete.OptGroup,
          dataSource = [{
        title: '类别1',
        children: [{
          title: 'AAA',
        }, {
          title: 'BBB',
        }],
      }, {
        title: '类别2',
        children: [{
          title: 'CCC',
        }, {
          title: 'DDD',
        }],
      }, {
        title: '类别3',
        children: [{
          title: 'EEE',
        }],
      }];

      function renderTitle(title) {
        return (
          <span>
            {title}
            <a
              style={{ float: 'right' }}
              href="https://www.google.com/search?q=antd"
              target="_blank"
              rel="noopener noreferrer"
            >更多
            </a>
          </span>
        );
      }


      const options = dataSource.map(group => (
          <OptGroup
            key={group.title}
            label={renderTitle(group.title)}
          >
            {group.children.map(opt => (
              <Option key={opt.title} value={opt.title}>
                {opt.title}
              </Option>
            ))}
          </OptGroup>
        )).concat([
          <Option disabled key="all" className="show-all">
            <a
              href="https://www.google.com/search?q=antd"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看所有结果
            </a>
          </Option>,
        ]);


    return(
      <Fragment>
      <NavBar
        className='NavBar'
        mode="dark"
        leftContent={<div>
                        <span onClick={()=> this.props.history.goBack()}>{'<返回'}</span>
                    </div>}
        ><div style={{color:'#fff'}}>资产类别</div></NavBar>
      <div className="certain-category-search-wrapper">
         <AutoComplete
           className="certain-category-search"
           dropdownClassName="certain-category-search-dropdown"
           dropdownMatchSelectWidth={false}
           dropdownStyle={{ width: 300 }}
           size="large"
           style={{ width: '100%' }}
           dataSource={options}
           placeholder="资产类别"
           optionLabelProp="value"
           value={this.state.defaultValue}
           onSelect={this.onSelect}
         >
           <Input suffix={<Icon type="search" className="certain-category-icon" />} />
         </AutoComplete>
       </div>
       <div className='certain-category-search-tag'>
         <h3>历史搜索</h3>
         {this.renderTag()}
       </div>

     </Fragment>
    )
  }
}




export default connect(state => {return {formData:state.formData}})(SearchAsset);
