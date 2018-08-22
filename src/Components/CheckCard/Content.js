import React,{Component} from 'react';
import './style.css';


class Content extends Component{

  render(){
    const data = [
      {
        name:'计算机',
        money:'5000',
        count:5
      },
      {
        name:'篮球',
        money:'50',
        count:7
      },
      {
        name:'足球',
        money:'100',
        count:2
      }
    ]

    const renderContent = (data,i)=>{
      return(
        <div key={i} className='checkcard-content-item'>
          <div className='checkcard-content-item-left'>
            <div className='checkcard-content-item-top'>{data.name}</div>
            <div className='checkcard-content-item-bottom'>{'￥' + data.money}</div>
          </div>
          <div className='checkcard-content-item-right'>{'x' + data.count}</div>
        </div>
      )
    }
    return (
      <div className='checkcard-content'>
        {data.map((d,i)=>
          renderContent(d,i)
        )}
      </div>
    )
  }
}

export default Content;
