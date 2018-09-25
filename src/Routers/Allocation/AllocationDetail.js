import React,{Component,Fragment} from 'react';
import {List,InputItem,Button,Picker,WingBlank } from 'antd-mobile'
import { createForm, formShape } from 'rc-form';
import * as MyActions from '../../Actions/asyncActions';


class Form extends Component{

  static propTypes = {
    form: formShape,
  };

  state={
    property:'A',
    department:'A',
    keeper:'张三'
  }

  onSubmit = () => {
    const {history,dispatch,data} = this.props;
    this.props.form.validateFields((error, value) => {
     if(!error){
       dispatch(MyActions.completeAllocation(value,data))
     }
   });

   history.push('/assetallocation/list')
 }

  render(){
    console.log(this.props);
    const document = window.document;
    const { getFieldProps } = this.props.form;
    const pickerData = [
          [
            {
              label: '资产A',
              value: 'A',
            },
            {
              label: '资产B',
              value: 'B',
            },
            {
              label: '资产C',
              value: 'C',
            },
          ],
        ];

    return(
      <Fragment>
        <div className='createform'>
            <WingBlank size='lg'>
              <List >
                  <Picker
                    title="选择使用部门"
                    extra=' '
                    data={pickerData}
                    cascade={false}
                    onOk={v => this.setState({ department: v[0] })}
                    onDismiss={() => this.setState({ department: null })}
                  >
                    <InputItem
                      clear
                      placeholder="请选择使用部门"
                      {...getFieldProps('department',{
                        initialValue:this.state.department
                      })}
                      onFocus={( )=>{document.activeElement.blur()}}
                    >*使用部门</InputItem>
                  </Picker>

                  <InputItem
                    clear
                    placeholder="请输入保管人"
                    {...getFieldProps('keeper',{
                      initialValue:this.state.keeper
                      // onChange:function(a){console.log('123213',a)},
                    })}
                  >保管人</InputItem>

                  <Picker
                    title="选择资产属性"
                    extra=' '
                    data={pickerData}
                    cascade={false}
                    onOk={v => this.setState({ property: v[0] })}
                    onDismiss={() => this.setState({ property: null })}
                  >
                    <InputItem
                      clear
                      placeholder="请选择资产属性"
                      {...getFieldProps('property',{
                        initialValue:this.state.property
                      })}
                      onFocus={( )=>{document.activeElement.blur()}}
                    >*资产属性</InputItem>
                  </Picker>
                </List>
            </WingBlank>
        </div>
        <div style={{position:'absolute',bottom:0,left:'25%',height:'8%',width:'50%'}}>
          <Button  type='primary' onClick={this.onSubmit}>完成入账</Button>
        </div>
      </Fragment>

    )
  }
}




export default createForm()(Form);
