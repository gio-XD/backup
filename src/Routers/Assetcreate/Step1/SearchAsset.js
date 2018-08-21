import React,{Component,Fragment} from 'react';
import { AutoComplete ,Input,Icon} from 'antd';
import { connect } from 'react-redux';
import {NavBar} from 'antd-mobile';
import * as MyActions from '../../../Actions/Actions';
import 'antd/dist/antd.css';
import './SearchAsset.css'

class SearchAsset extends Component{
  state ={
    defaultValue:this.props.formData.category?this.props.formData.category : undefined
  }
  onSelect = (val) => {
    console.log(val);
    this.props.dispatch(MyActions.saveForm({category:val}))
    this.props.history.goBack()
  }
  render(){
    console.log(this);
    const Option = AutoComplete.Option;
    const OptGroup = AutoComplete.OptGroup;
    const dataSource = [{
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
           defaultValue={this.state.defaultValue}
           onSelect={this.onSelect}
         >
           <Input suffix={<Icon type="search" className="certain-category-icon" />} />
         </AutoComplete>
       </div>
     </Fragment>
    )
  }
}




export default connect(state => {return {formData:state.formData}})(SearchAsset);
