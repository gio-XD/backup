import React, { Component, Fragment } from 'react'
import './NewCard.css'

class NewCard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  render () {
    const { isOpen } = this.state
    return (
      <Fragment>
        <div
          className = 'newcard'
          onClick={() => {
            console.log('click')
            this.setState({
              isOpen: !isOpen
            })
          }}
        >
          <span>{isOpen ? '收起' : '展开'}</span>
        </div>
        {/* <QueueAnim type='top' duration = {100} transitionLeave={false}> */}
        {isOpen ? <div key = '1' className = 'newcard-detail'>NewCard detail</div> : null}
        {/* </QueueAnim> */}
      </Fragment>

    )
  }
}

export default NewCard
