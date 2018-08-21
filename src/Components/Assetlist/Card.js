import React, { Component } from 'react';
import {WhiteSpace} from 'antd-mobile';
import {withRouter } from 'react-router';
import './style.css'

class Mycard extends Component{
  render(){
    const {data,noWhiteBlank} = this.props;
    return(
      <div onClick={()=>this.props.history.push({pathname:`/asset/${data.id}`,state: {text:"资产详情",data:data }})}>
        {noWhiteBlank === true ? null : <WhiteSpace size='lg'/>}
          <div className='card'>
            <div className='number'>
              <div className='number-div'>{data.id}</div>
              <div className='number-div2'>资产编号</div>
            </div>
            <div className='detail'>
              <div className='detail-div'>
                <div className='category'>
                    <span>资产分类：</span>
                    <span>{data.category}</span>
                </div>
                <div>
                  <span>使用部门：</span>
                  <span>{data.department}</span>
                </div>
              </div>
              <div className='detail-div2'>
                <div className='sum'><div className='icon-sum'></div><span style={{paddingTop:"-8px",paddingLeft:'4px'}}>{data.sum}</span> </div>
                <div className='date'><div className='icon-date'></div>
                  <span style={{paddingTop:"-8px",color:"#bfbfbf",paddingLeft:'2px'}}>入账日期:</span>
                  <span style={{paddingTop:"-8px",color:"#bfbfbf"}}>{data.payDate}</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}


export default withRouter(Mycard);
