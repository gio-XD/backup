import { Route,Redirect,withRouter } from 'react-router';
import {NavBar,Steps} from 'antd-mobile'
import React,{Component, Fragment} from 'react';
import {Icon} from 'antd'
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import './style.css'
const Step = Steps.Step;


class Assetcreate extends Component{
  render(){
    const currentStep = (pathname)=>{
      const steps=[
        {pathname:'step1',current:0},
        {pathname:'step2',current:1},
        {pathname:'step3',current:2},
      ]
      var current=steps.find((step,i)=>(
         step.pathname ===pathname.split('/')[pathname.split('/').length - 1]
      ))
      // console.log(current);
      return  current?current.current : 0;
    }
    const steps = [{
        title: '基本信息',
        }, {
          title: '扩充信息',
        }, {
          title: '完成',
        }].map((s, i) => <Step key={i} title={s.title}/>);

    return(
      <div className='createpage'>
        <div>
          <NavBar
            className='NavBar'
            mode="dark"
            leftContent={<Fragment>
                            <Icon type="left" theme="outlined" />
                            <span onClick={()=> this.props.history.goBack()}>{'返回'}</span>
                            {this.props.location.pathname === '/assetcreate/step2' ? <span style={{marginLeft:'8px'}} onClick={()=> this.props.history.goBack()}>上一步</span> : null }
                          </Fragment>}

            ><div style={{color:'#fff'}}>资产新增</div></NavBar>
            <div style={{marginTop:'16px'}}>
              <Steps direction="horizontal" size='small' current={currentStep(this.props.location.pathname)}>
                {steps}
              </Steps>
            </div>
        </div>
        <div>
          <Route path='/assetcreate' exact render={()=>(<Redirect to='/assetcreate/step1'/>)}/>
          <Route path='/assetcreate/step1'  render={()=>(<Step1 {...this.props}/>)}/>
          <Route path='/assetcreate/step2'  render={()=>(<Step2 {...this.props}/>)}/>
          <Route path='/assetcreate/step3'  render={()=>(<Step3 {...this.props}/>)}/>
        </div>
      </div>
    )
  }
}



export default withRouter(Assetcreate);
