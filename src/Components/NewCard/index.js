import React,{Component} from 'react'
import NewCard from './NewCard.js'
import { Accordion, List } from 'antd-mobile'
import './NewCard.css'


class NewCardList extends Component {
  render(){
    return(
      <div className = 'newcard-container'>
          <Accordion accordion={true} className="my-accordion" >
           <Accordion.Panel header="Title 1">
             <List className="my-list">
               <NewCard/>
             </List>
           </Accordion.Panel>
           <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
           <Accordion.Panel header="Title 3" className="pad">
             text text text text text text text text text text text text text text text
           </Accordion.Panel>
         </Accordion>
          <NewCard/>
          <NewCard/>
      </div>
    )
  }
}


export default NewCardList
