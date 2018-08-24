import React,{Component} from 'react';
import {ListView,List,Checkbox} from 'antd-mobile';
import { StickyContainer, Sticky } from 'react-sticky';
import ReactDOM from 'react-dom';
import './Content.css';


const CheckboxItem = Checkbox.CheckboxItem;
const AgreeItem = Checkbox.AgreeItem;

function MyBody(props) {
  return (
    <div className="am-list-body my-body">
      <span style={{ display: 'none' }}>you can custom body wrap element</span>
      {props.children}
    </div>
  );
}

const data = [
  {
    img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
    title: '2018-08-23',
    check:false,
    children:[
      {
        name:'aaaaa',
        check:true
      },
      {
        name:'bbbbb',
        check:false
      },
      {
        name:'ccccc',
        check:true
      }
    ]
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
    title: '2018-08-10',
    check:false,
    children:[
      {
        name:'1111',
        check:false
      },
      {
        name:'2222',
        check:false
      },
      {
        name:'3333',
        check:true
      }
    ]
  },
  {
    img: 'https://zos.alipayobjects.com/rmsportal/hfVtzEhPzTUewPm.png',
    title: '2018-08-14',
    check:false,
    children:[
      {
        name:'ee',
        check:false
      },
      {
        name:'ff',
        check:false
      },
      {
        name:'dd',
        check:false
      }
    ]
  },
];
const NUM_SECTIONS = 5;
const NUM_ROWS_PER_SECTION = 5;
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
      // you can scroll to the specified position
      // setTimeout(() => this.lv.scrollTo(0, 120), 800);

      const hei = document.documentElement.clientHeight - ReactDOM.findDOMNode(this.lv).parentNode.offsetTop;
      // simulate initial Ajax


      setTimeout(() => {
        console.log(dataBlobs, sectionIDs, rowIDs);
        genData();
        if(sectionIDs.length !== rowIDs.length){
          console.log('different');
          sectionIDs=[];
          rowIDs=[];
          genData();
        }else {
          console.log('same');
        }
        console.log(dataBlobs, sectionIDs, rowIDs);


        this.setState({
          dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlobs, sectionIDs, rowIDs),
          isLoading: false,
          height: hei,
        });
      }, 600);
    }

    // If you use redux, the data maybe at props, you need use `componentWillReceiveProps`
    // componentWillReceiveProps(nextProps) {
    //   if (nextProps.dataSource !== this.props.dataSource) {
    //     this.setState({
    //       dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.dataSource),
    //     });
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
      const onSelect = (check,value,child) => {
        console.log(check,value,child);
        data.map((d)=>{
          if(d.title === value){
            d.check=check
            if(check && d.children){
              console.log(123);
              d.children.forEach((c)=>{
                c.check=true
              })
            }
          }

        })
        this.setState({
          aaa:1
        })
      }
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
      let index = data.length - 1;
      const row = (rowData, sectionID, rowID) => {
        if (index < 0) {
          index = data.length - 1;
        }
        const obj = data[index--];
        return (
          <div key={rowID} style={{ padding: '0 15px' }}>
            <div
              style={{
                lineHeight: '50px',
                // color: '#888',
                fontSize: 18,
                // borderBottom: '1px solid #F6F6F6',
              }}
            ><AgreeItem style={{marginLeft:0}} onChange={(a)=>onSelect(a.target.checked,obj.title)} /*checked={obj.check}*/checked={obj.check} >{obj.title}</AgreeItem></div>
                <List>
                  {obj.children?(obj.children.map((child,i) =>
                    <List.Item
                      key={i}
                      className='allocation-checkbox-list'
                      >
                      <Checkbox className="allocation-checkbox" onChange={(a)=>onSelect(a.target.checked,obj.title,child.name)} checked={child.check}/>
                      <div className='text' onClick={()=>{console.log(222,child);}}>
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
          // renderSectionHeader={sectionData => (
          //   <div>{`Task ${sectionData.split(' ')[1]}`}</div>
          // )}
          renderBodyComponent={() => <MyBody />}
          renderRow={row}
          renderSeparator={separator}
          style={{
            height: this.state.height,
            overflow: 'auto',
          }}
          pageSize={4}
          onScroll={() => { console.log('scroll'); }}
          scrollRenderAheadDistance={500}
          // onEndReached={this.onEndReached}
          // onEndReachedThreshold={10}
        />
      );
    }
}

export default Content;
