import React,{Component} from 'react';
import {ListView,List,Checkbox} from 'antd-mobile';
import ReactDOM from 'react-dom';
import './Content.css';
import * as MyActions from '../../../Actions/asyncActions';

const AgreeItem = Checkbox.AgreeItem;

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      {props.children}
    </div>
  );
}


// const NUM_SECTIONS = 1;
const NUM_ROWS_PER_SECTION = 1;
let pageIndex = 0;

function genData(ds, listData) {
  console.log(listData);
  const dataBlob = ds._dataBlob ? ds._dataBlob : {}
  // let dataBlob={...dataBlob}
  const sectionIDs = [];
  const rowIDs = [];
  listData.forEach((item, index) => {
    sectionIDs.push(JSON.stringify({title:item.title,check:item.check}));
    // dataBlob[item.title] = item.title;
    rowIDs[index] = [];

    item.children.forEach((jj) => {
      rowIDs[index].push(jj.id);
      dataBlob[jj.id] = jj;
      // console.log(dataBlob[jj.id]);
    });
  });
    return ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);

}


class Content extends Component{
  constructor(props) {
      super(props);
      const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
      const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];
      console.log(123,this.props.data);
      const dataSource = new ListView.DataSource({
        getRowData,
        getSectionHeaderData: getSectionData,
        rowHasChanged: (row1, row2) =>{/* console.log(row1 !== row2);*/ return /*row1 !== row2*/ true}, //为true时listview重新渲染row组件
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      });

      this.state = {
        dataSource:genData(dataSource,this.props.data),
        isLoading: true,
        height: document.documentElement.clientHeight * 3 / 4,
      };
    }


    componentWillReceiveProps(nextProps) {
      if (nextProps.data !== this.props.data) {
        // console.log(nextProps.data);
        let data = [...nextProps.data]
        const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
        // setTimeout(() => {
          this.setState({
            dataSource: genData(this.state.dataSource, data),
            isLoading: false,
            height: hei,
          });
        // }, 100);
      }
    }

    onEndReached = (event) => {
      // load new data
      // hasMore: from backend data, indicates whether it is the last page, here is false
      // if (this.state.isLoading && !this.state.hasMore) {
      //   return;
      // }
      console.log('reach end', event);
      this.setState({ isLoading: true });
      setTimeout(() => {
        this.setState({
          dataSource: genData(this.state.dataSource, this.props.data),
          isLoading: false,
        });
      }, 400);
    }

    render() {
      const row = (rowData, sectionID, rowID) => {
        // console.log('rowData',rowData, 'sectionID',sectionID, 'rowID',rowID);
        // let data_temp=this.props.data.find(item => item.title === JSON.parse(sectionID).title)
        // let rowData_temp = data_temp.children.find(item => item.id === rowID )
        // console.log(rowData_temp);
        return (
          <div key={rowID} >
                      <List.Item
                        key={rowData.id}
                        className='allocation-checkbox-list'
                        >
                        <Checkbox className="allocation-checkbox" onChange={(a)=>this.props.dispatch(MyActions.HandleAllocationSelect(
                          {
                          check:a.target.checked,
                          title:JSON.parse(sectionID).title,
                          child:rowData.id,
                          data:this.props.data
                        },
                        'saveAllocationData'
                      ))}
                         checked={rowData.check}/>
                        <div className='text' onClick={()=>{this.props.history.push({pathname:`/asset/${rowData.id}`,state: {text:"资产详情",data:rowData }})}}>
                          {/* {child} */}
                          <div className='leftbody'>
                            <div style={{width:'100%',textAlign:'center'}}>{rowData.id}</div>
                            <div style={{width:'100%',textAlign:'center'}}>固定资产</div>
                          </div>
                          <div className='rightbody '>
                            <div style={{width:'100%'}}>资产类别：{rowData.category}</div>
                            <div style={{width:'100%'}}>
                              <span>￥{rowData.sum}</span>
                              <span style={{position:'relative',left:'70px',top:'8px',fontSize:'12px',opacity:'0.5'}}>已入库</span>
                            </div>
                          </div>
                        </div>
                      </List.Item>
          </div>
        );
      };
      return (
        <ListView
          ref={el => this.lv = el}
          dataSource={this.state.dataSource}
          renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
            {this.state.isLoading ? 'Loading...' : 'Loaded'}
          </div>)}
          renderBodyComponent={() => <MyBody />}
          renderSectionHeader={(_,sectionID) => (
            <AgreeItem
              checked={JSON.parse(sectionID).check}
              style={{marginLeft:0}}
              onClick={(a)=>this.props.dispatch(MyActions.HandleAllocationSelect(
                {
                check:a.target.checked,
                title:JSON.parse(sectionID).title,
                data:this.props.data
              },
              'saveAllocationData'
            ))}
              >
                {JSON.parse(sectionID).title}
              </AgreeItem>
          )
          }
          renderRow={row}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          pageSize={1}
         onScroll={() => { console.log('scroll'); }}
          scrollRenderAheadDistance={50}
          onEndReached={this.onEndReached}
          onEndReachedThreshold={10}
        />
      );
    }
}

export default Content;
