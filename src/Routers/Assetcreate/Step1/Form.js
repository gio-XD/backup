import React,{Component,Fragment} from 'react';
import {List,InputItem,Button,DatePicker,Picker,WingBlank } from 'antd-mobile'
import { createForm, formShape } from 'rc-form';
import * as MyActions from '../../../Actions/Actions';
import '../style.css'


class Form extends Component{

  static propTypes = {
    form: formShape,
  };

  state={
    unitPrice:this.props.formData.unitPrice?this.props.formData.unitPrice:undefined,
    count:this.props.formData.count?this.props.formData.count:undefined,
    payDate:this.props.formData.payDate?this.props.formData.payDate:undefined,
    property:this.props.formData.property?this.props.formData.property:undefined,
  }

  onSubmit = () => {
    const {history,dispatch} = this.props;
   this.props.form.validateFields((error, value) => {
     // console.log(error, value);
     if(!error){
       dispatch(MyActions.saveForm(value))
     }
   });

   history.push('/assetcreate/step2')
 }

  render(){
    console.log(this.props.formData.property);
    const {history,formData} = this.props;
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
      const  handleScan = ()  =>{
          window.wx.ready(function(){
            // alert(location.href.split('#')[0]);
            window.wx.scanQRCode({
            needResult: 1, // 默认为0，扫描结果由微信处理，1则直接返回扫描结果，
            scanType: ["qrCode","barCode"], // 可以指定扫二维码还是一维码，默认二者都有
            success: function (res) {
            var result = res.resultStr; // 当needResult 为 1 时，扫码返回的结果
            alert(result);
            }
            });
          })
        }
        const formatDate =(mydate) => {
          function zeroFixed(date){
            if(date.toString().length === 1)
            return '0'+date

            return date;
          }
          var date = new Date(mydate);
          return date.getFullYear() + '-' + zeroFixed(date.getMonth() + 1) + '-' + zeroFixed(date.getDate())
        }

        function formatMoney (num) {
            num = parseFloat(num);
            console.log(num);
            return (num.toFixed(2) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
        }
    return(
      <Fragment>
        <div className='createform'>
            <WingBlank size='lg'>
              <List >
                    <InputItem
                      clear
                      placeholder="请输入资产分类"
                      onFocus={( )=>{history.push('/searchasset')}}
                      {...getFieldProps('category',{
                        initialValue:formData.category?formData.category :null
                      })}
                    >*资产分类</InputItem>
                  <InputItem
                    clear
                    placeholder="请输入规格型号"
                    {...getFieldProps('type',{
                      initialValue:formData.type?formData.type :null
                      // onChange:function(a){console.log('123213',a)},
                    })}
                  >规格型号</InputItem>
                  <InputItem
                    clear
                    defaultValue=""
                    placeholder="请输入计量单位"
                    {...getFieldProps('unit',{
                      initialValue:formData.unit?formData.unit:null
                    })}
                  >计量单位</InputItem>
                  <DatePicker
                    mode="date"
                    title="请选择日期"
                    extra=" "
                    onOk={v => {console.log(v); this.setState({ payDate: formatDate(v) })}}
                    onDismiss={() => this.setState({ payDate: null })}
                  >
                    <InputItem
                        clear
                        placeholder="请选择购置日期"
                        onFocus={( )=>{document.activeElement.blur()}}
                        {...getFieldProps('payDate',{
                          initialValue:this.state?this.state.payDate : null
                        })}
                      >*购置日期</InputItem>
                  </DatePicker>

                  <InputItem
                    clear
                    defaultValue=""
                    placeholder="请输入单价"
                    {...getFieldProps('unitPrice',{
                      onChange:function(value){this.setState({unitPrice:value})}.bind(this),
                      initialValue:formData.unitPrice? formData.unitPrice :null
                    })}
                    type='money'
                     moneyKeyboardAlign='left'
                  >*单价</InputItem>
                  <InputItem
                    clear
                    type='money'
                    moneyKeyboardAlign='left'
                    value={this.state?this.state.count :0}
                    placeholder="请输入数量"
                    {...getFieldProps('count',{
                      onChange:function(value){this.setState({count:value})}.bind(this),
                      initialValue:formData.count?formData.count:null
                    })}
                  >*数量</InputItem>
                  <InputItem
                    clear
                    disabled={false}
                    placeholder="请输入金额"
                    onFocus={( )=>{document.activeElement.blur()}}
                    {...getFieldProps('sum',{
                      initialValue:this.state?(this.state.unitPrice * this.state.count ? formatMoney(this.state.unitPrice * this.state.count) : null) : null
                    })}
                  >*金额</InputItem>
                  <InputItem
                    clear
                    defaultValue=""
                    placeholder="请输入发票号码"
                    extra={<div className='scanicon'></div>}
                    {...getFieldProps('invoiceId',{
                      initialValue:formData.invoiceId?formData.invoiceId:null
                    })}
                    onExtraClick={()=>handleScan()}
                  >发票号码</InputItem>

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
                      placeholder="请输入资产属性"
                      {...getFieldProps('property',{
                        initialValue:this.state?this.state.property : null
                      })}
                      onFocus={( )=>{document.activeElement.blur()}}
                    >*资产属性</InputItem>
                  </Picker>
                </List>
            </WingBlank>
        </div>
        <div className='nextstep'>
          <Button  type='primary' onClick={this.onSubmit}>下一步</Button>
        </div>
      </Fragment>

    )
  }
}




export default createForm()(Form);
