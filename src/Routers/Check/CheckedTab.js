import React,{Component} from 'react';
import CheckCard from '../../Components/CheckCard';
import  './style.css'

class CheckedTab extends Component{

  render(){
    return (
      <div className='check-tab-content'>
        <CheckCard {...this.props}/>
        <CheckCard {...this.props}/>
      </div>
    )
  }
}


export default CheckedTab;
