import React,{Component} from 'react';
import {List,Button} from 'antd-mobile';
import { connect } from 'react-redux';
import '../style.css'

const listData = [
  {key:'category',text:'资产分类'},
  {key:'type',text:'规格型号'},
  {key:'unit',text:'计量单位'},
  {key:'payDate',text:'购置日期'},
  {key:'unitPrice',text:'单价'},
  {key:'count',text:'数量'},
  {key:'sum',text:'金额'},
  {key:'invoiceId',text:'发票号码'},
  {key:'property',text:'资产属性'},
  {key:'source',text:'资产来源'},
  {key:'department',text:'使用部门'},
  {key:'keeper',text:'保管人'},
  {key:'keepPlace',text:'存放地点'},
  {key:'brand',text:'品牌'},
  {key:'producer',text:'供应商'},
  {key:'status',text:'使用现状'},
  {key:'direction',text:'使用方向'},
  {key:'remark',text:'备注'}
]

class Step3 extends Component{
  onSubmit = () => {
    this.props.history.push('/index')
  }

  render(){
    const renderList = () => {
      const {formData} = this.props;
      var children = [];
     listData.forEach((data,i) =>
       {children.push(<div key={i} className='comfirmlist'><div className='comfirmlist-left'>{data.text + '：'}</div><div className='comfirmlist-right '>{formData?(formData[data.key]? formData[data.key] : '-'):'-'}</div></div>)}
     )
     return children;
   }
    return(
      <div className='steppage'>
        <div className='comfirmlist-container' >
          <div style={{width:'100%',height:'12px'}}></div>
          {renderList()}
        </div>
        <div className='nextstep-left'>
          <Button  type='primary' onClick={()=>{this.props.history.goBack()}}>返回编辑</Button>
        </div>
        <div className='nextstep-right'>
          <Button  type='primary' onClick={this.onSubmit}>确认上报</Button>
        </div>
      </div>
    )
  }
}


export default connect(state=>{return{formData:state.formData}})(Step3);
