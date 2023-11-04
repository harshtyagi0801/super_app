import React from 'react'

import Cards from '../component/cards/Cards'

function Genre() {
  return (
    <div style={{display: 'grid' ,height:'100vh', gridTemplateColumns: '52% 48% ',backgroundColor:'black'}}>
 
    <Cards/>
    </div>
  )
}

export default Genre