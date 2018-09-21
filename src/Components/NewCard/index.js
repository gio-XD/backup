import React,{Component} from 'react'
import NewCard from './NewCard.js'
import './NewCard.css'


class NewCardList extends Component {
  render(){
    return(
      <div className = 'newcard-container'>
          <NewCard/>
          <NewCard/>
      </div>
    )
  }
}


export default NewCardList
