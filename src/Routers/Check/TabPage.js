import React,{Component,Fragment} from 'react';
import {WhiteSpace,Tabs,SegmentedControl} from 'antd-mobile';
import CheckingTab from './CheckingTab';
import CheckedTab from './CheckedTab';
import './style.css';

class TabPage extends Component{
  state ={
    tabPage:0
  }
  render(){
    const {tabPage} = this.state;
    const tabs = [
      { title:'待验收' },
      { title:'已验收' }
    ];
    const renderTabBar = (props) => {
      let value = [];
      props.tabs.forEach(tab => {
        value.push(tab.title)
      })
      return <SegmentedControl style={{background:'#fff',marginBottom:'8px'}} values={value} onChange={a=>this.setState({tabPage:a.nativeEvent.selectedSegmentIndex})} />
    }
    return (
      <Fragment>
        
        <Tabs tabs={tabs}
          page={tabPage}
          useOnPan={false}
          renderTabBar={renderTabBar}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
            <CheckingTab {...this.props}/>
            <CheckedTab {...this.props}/>
        </Tabs>
      </Fragment>
    )
  }
}

export default TabPage;
