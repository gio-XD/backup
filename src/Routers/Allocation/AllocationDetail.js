import React,{Component,Fragment} from 'react';
import {List,InputItem,Button,Picker,WingBlank } from 'antd-mobile'
import { createForm, formShape } from 'rc-form';
import * as MyActions from '../../Actions/Actions';


class Form extends Component{

  static propTypes = {
    form: formShape,
  };

  state={

  }

  onSubmit = () => {
    const {history,dispatch} = this.props;
   this.props.form.validateFields((error, value) => {
     console.log(error, value);
     if(!error){
       dispatch(MyActions.saveForm(value))
     }
   });

   history.push('/assetallocation/list')
 }

  render(){
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
                    onOk={v => this.setState({ property: v[0] })}
                    onDismiss={() => this.setState({ property: null })}
                  >
                    <InputItem
                      clear
                      placeholder="请选择使用部门"
                      {...getFieldProps('property',{
                        initialValue:'A'
                      })}
                      onFocus={( )=>{document.activeElement.blur()}}
                    >*使用部门</InputItem>
                  </Picker>

                  <InputItem
                    clear
                    placeholder="请输入规格型号"
                    {...getFieldProps('type',{
                      initialValue:'型号A'
                      // onChange:function(a){console.log('123213',a)},
                    })}
                  >保管人</InputItem>

                  <Picker
                    title="选择存放地点"
                    extra=' '
                    data={pickerData}
                    cascade={false}
                    onOk={v => this.setState({ property: v[0] })}
                    onDismiss={() => this.setState({ property: null })}
                  >
                    <InputItem
                      clear
                      placeholder="请选择存放地点"
                      {...getFieldProps('keepPlace',{
                        initialValue:'A'
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
