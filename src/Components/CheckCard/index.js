import React,{Component} from 'react';
import './style.css';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';

class CheckCard extends Component{

  render(){
    return (
      <div className='checkcard' onClick={()=>{this.props.history.push('/checksearch/detail')}}>
        <Header/>
        <Content/>
        <Footer/>
      </div>
    )
  }
}



export default CheckCard;
