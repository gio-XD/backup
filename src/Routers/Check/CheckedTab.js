import React,{Component} from 'react';
import CheckCard from '../../Components/CheckCard';
import  './style.css'

class CheckedTab extends Component{

  render(){
    return (
      <div className='check-tab-content'>
          <CheckCard key = '1' {...this.props}/>
          <CheckCard key = '2' {...this.props}/>
      </div>
    )
  }
}


export default CheckedTab;
