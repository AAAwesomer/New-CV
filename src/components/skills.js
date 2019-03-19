// Skills component displays only a card deck created in notecards.js

import React from 'react'
import Deck from './notecards/notecards'

var createReactClass = require('create-react-class');

var Skills = createReactClass({
  render() {
    return(
      <div className='skills'>
        <Deck />
      </div>
    )
  }
})

export default Skills

