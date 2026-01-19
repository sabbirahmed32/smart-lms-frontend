import React from 'react'
import Hader from './Hader'
import Foter from './Foter'

function Layouts({ children }) {
  return (
    <div>
        <Hader></Hader>
        { children }
        <Foter></Foter>
    </div>
  )
}

export default Layouts