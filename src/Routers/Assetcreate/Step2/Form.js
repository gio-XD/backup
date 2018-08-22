import React,{Component,Fragment} from 'react';
import {List,InputItem,Button,/*DatePicker,Picker,*/WingBlank } from 'antd-mobile'
import { createForm, formShape } from 'rc-form';
import * as MyActions from '../../../Actions/Actions';
import '../style.css'


class Form extends Component{
  static propTypes = {
    form: formShape,
  };

  onSubmit = () => {
    const {history,dispatch,form} = this.props;
      form.validateFields((error, value) => {
      console.log(error, value);
      if(/*!error*/  1>0){
        dispatch(MyActions.saveForm(value));
        history.push('/assetcreate/step3');
      }
    });
  }

  render(){
    const { getFieldProps } = this.props.form;
    const {formData} = this.props;
    return(
      <Fragment>
        <div className='createform'>
            <WingBlank size='lg'>
              <List>
                  <InputItem
                    defaultValue=""
                    placeholder="默认购置"
                    {...getFieldProps('source',{
                      initialValue:formData.source?formData.source:null
                    })}
                  >资产来源</InputItem>
                  <InputItem
                    defaultValue=""
                    placeholder="请选择使用部门"
                    {...getFieldProps('department',{
                      initialValue:formData.department?formData.department:null,
                      rules: [{required: true}],
                    })}
                  >*使用部门</InputItem>
                  <InputItem
                    defaultValue=""
                    placeholder="请输入保管人"
                    {...getFieldProps('keeper',{
                      initialValue:formData.keeper?formData.keeper:null
                    })}
                  >*保管人</InputItem>
                  <InputItem
                    defaultValue=""
                    placeholder="请输入存放地点"
                    {...getFieldProps('keepPlace',{
                      initialValue:formData.keepPlace?formData.keepPlace:null
                    })}
                  >存放地点</InputItem>
                  <InputItem
                    defaultValue=""
                    placeholder="请输入品牌"
                    {...getFieldProps('brand',{
                      initialValue:formData.brand?formData.brand:null
                    })}
                  >品牌</InputItem>
                  <InputItem
                    defaultValue=""
                    placeholder="请输入供应商"
                    {...getFieldProps('producer',{
                      initialValue:formData.producer?formData.producer:null
                    })}
                  >供应商</InputItem>
                  <InputItem
                    defaultValue=""
                    placeholder="使用现状"
                    {...getFieldProps('status',{
                      initialValue:formData.status?formData.status:null
                    })}
                  >使用现状</InputItem>
                  <InputItem
                    defaultValue=""
                    placeholder="请输入使用方向"
                    {...getFieldProps('direction',{
                      initialValue:formData.direction?formData.direction:null
                    })}
                  >使用方向</InputItem>
                  <InputItem
                    defaultValue=""
                    placeholder="请输入备注"
                    {...getFieldProps('remark',{
                      initialValue:formData.remark?formData.remark:null
                    })}
                  >备注</InputItem>
                </List>
            </WingBlank>
        </div>
        <div className='nextstep-left'>
          <Button  type='primary' onClick={()=>{this.props.history.goBack()}}>上一步</Button>
        </div>
        <div className='nextstep-right'>
          <Button  type='primary' onClick={this.onSubmit}>完成并保存</Button>
        </div>
      </Fragment>
    )
  }
}



export default createForm()(Form);
