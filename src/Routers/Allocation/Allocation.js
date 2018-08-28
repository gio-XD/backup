import React,{Component,Fragment} from 'react';
import Footer from './Footer'
import Content from './Content'
import * as MyActions from '../../Actions/asyncActions'


class Allocation extends Component{
  componentWillMount(){
    this.props.dispatch(MyActions.fetchAllocationData())
  }

  render(){
    const selectAll = (a) => {
      this.props.dispatch(MyActions.HandleAllocationSelect({data:this.props.data,check:a},'saveAllocationData'))
    }
    return(
      <Fragment>
        <Content {...this.props}/>
        <Footer onSelect={selectAll} {...this.props}/>
      </Fragment>
    )
  }
}




export default Allocation;
