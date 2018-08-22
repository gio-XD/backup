import React,{Component,Fragment} from 'react';
import Content from './Content';
import Header from './Header';
import './style.css';


class CheckDetail extends Component{

  render (){
    return (
      <div className='checkdetail-container'>
        <Header/>
        <Content/>
      </div>
    )
  }
}

export default CheckDetail;
