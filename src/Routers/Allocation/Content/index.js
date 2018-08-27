import React,{Component} from 'react';
import {ListView,List,Checkbox} from 'antd-mobile';
import ReactDOM from 'react-dom';
import './Content.css';
import * as MyActions from '../../../Actions/asyncActions'

const AgreeItem = Checkbox.AgreeItem;

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      {props.children}
    </div>
  );
}


const NUM_SECTIONS = 8;
const NUM_ROWS_PER_SECTION = 1;
let pageIndex = 0;

const dataBlobs = {};
let sectionIDs = [];
let rowIDs = [];
function genData(pIndex = 0) {
  for (let i = 0; i < NUM_SECTIONS; i++) {
    const ii = (pIndex * NUM_SECTIONS) + i;
    const sectionName = `Section ${ii}`;
    sectionIDs.push(sectionName);
    dataBlobs[sectionName] = sectionName;
    rowIDs[ii] = [];

    for (let jj = 0; jj < NUM_ROWS_PER_SECTION; jj++) {
      // console.log("ii",ii,"jj",jj);
      const rowName = `S${ii}, R${jj}`;
      rowIDs[ii].push(rowName);
      dataBlobs[rowName] = rowName;
    }
  }
  sectionIDs = [...sectionIDs];
  rowIDs = [...rowIDs];
}

class Content extends Component{
  constructor(props) {
      super(props);
      const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
      const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

      const dataSource = new ListView.DataSource({
        getRowData,
        getSectionHeaderData: getSectionData,
        rowHasChanged: (row1, row2) => row1 !== row2,
        sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
      });

      this.state = {
        dataSource,
        isLoading: true,
        height: document.documentElement.clientHeight * 3 / 4,
      };
    }

    componentDidMount() {
      const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;

      setTimeout(() => {
        genData();
        if(sectionIDs.length !== rowIDs.length){
          console.log('different');
          sectionIDs=[];
          rowIDs=[];
          genData();
        }else {
          console.log('same');
        }
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
          isLoading: false,
          height: hei,
        });
      }, 600);
    }

    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    // componentWillReceiveProps(nextProps) {
    //   console.log(nextProps);
    //   if (nextProps.data !== this.props.data) {
    //     const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
    //     genData();
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.data),
    //       isLoading: false,
    //       height: hei,
    //     });
    //     // this.setState({
    //     //   dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.dataSource),
    //     // });
    //   }
    // }

    onEndReached = (event) => {
      // load new data
      // hasMore: from backend data, indicates whether it is the last page, here is false
      if (this.state.isLoading && !this.state.hasMore) {
        return;
      }
      console.log('reach end', event);
      this.setState({ isLoading: true });
      setTimeout(() => {
        genData(++pageIndex);
        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
          isLoading: false,
        });
      }, 1000);
    }

    render() {

      const separator = (sectionID, rowID) => (
        <div
          key={`${sectionID}-${rowID}`}
          style={{
            backgroundColor: '#F5F5F9',
            height: 8,
            borderTop: '1px solid #ECECED',
            borderBottom: '1px solid #ECECED',
          }}
        />
      );
      let index = this.props.data.length - 1;
      const row = (rowData, sectionID, rowID) => {
        if (index < 0) {
          index = this.props.data.length - 1;
        }
        const obj = this.props.data[index--];
        return (
          <div key={rowID} style={{ padding: '0 15px' }}>
            <div
              style={{
                lineHeight: '50px',
                // color: '#888',
                fontSize: 18,
                // borderBottom: '1px solid #F6F6F6',
              }}
            ><AgreeItem style={{marginLeft:0}} onChange={(a)=>this.props.dispatch(MyActions.HandleAllocationSelect({check:a.target.checked,title:obj.title,data:this.props.data},'saveAllocationData'))} checked={obj.check} >{obj.title}</AgreeItem></div>
                <List>
                  {obj.children?(obj.children.map((child,i) =>
                    <List.Item
                      key={i}
                      className='allocation-checkbox-list'
                      >
                      <Checkbox className="allocation-checkbox" onChange={(a)=>this.props.dispatch(MyActions.HandleAllocationSelect(
                        {
                        check:a.target.checked,
                        title:obj.title,
                        child:child.name,
                        data:this.props.data
                      },
                      'saveAllocationData'
                    ))}
                       checked={child.check}/>
                      <div className='text' onClick={()=>{this.props.history.push({pathname:`/asset/1`,state: {text:"资产详情",data:{
                        id:11,
                        category:11,
                        department:11,
                        sum:11,
                        payDate:11,
                        assetName:11,
                        count:11,
                        keeper:11,
                        type:11,
                        source:11,
                        remark:11
                      } }})}}>
                        {/* {child} */}
                        <div className='leftbody'>
                          <div style={{width:'100%',textAlign:'center'}}>20170233</div>
                          <div style={{width:'100%',textAlign:'center'}}>固定资产</div>
                        </div>
                        <div className='rightbody '>
                          <div style={{width:'100%'}}>资产类别：{child.name}</div>
                          <div style={{width:'100%'}}>
                            <span>￥5000</span>
                            <span style={{position:'relative',left:'70px',top:'8px',fontSize:'12px',opacity:'0.5'}}>已入库</span>
                          </div>
                        </div>
                      </div>
                    </List.Item> ))
                     : null }
                </List>
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
          renderRow={row}
          renderSeparator={separator}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          pageSize={4}
         onScroll={() => { console.log('scroll',this.props.data); }}
         //scrollRenderAheadDistance={500}
          //onEndReached={this.onEndReached}
          //onEndReachedThreshold={10}
        />
      );
    }
}

export default Content;
