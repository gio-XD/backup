import React,{Component} from 'react';
import {Modal,PickerViewer,DatePicker} from 'antd-mobile'


class MyDatePicker extends Component{
  render(){
    return(
      <div>
        <Modal
         popup
         visible={true}
         // onClose={this.onClose('modal2')}
         animationType="slide-up"
       >
         <DatePicker
           mode="date"
           title="Select Date"
           extra="Optional"
           // value={this.state.date}
           // onChange={date => this.setState({ date })}
         >
           <div>Date</div>
       </DatePicker>
       </Modal>
      </div>
    )
  }
}


export default MyDatePicker;
