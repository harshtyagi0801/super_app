import React from 'react'
import Profile from '../component/fechedsection/Profile'
import News from '../component/fechedsection/News'
import Whethher from '../component/fechedsection/Whethher'
import Text from '../component/fechedsection/Text'
import Timer from '../component/fechedsection/Timer'

function Browse() {
  return (
    <div style={{display: 'grid' , gridTemplateColumns: '65% 32% ',height:'100vh',backgroundColor:'black'}}>
      <div style={{}}>
        <Text/>
        <Profile />
        <Whethher />
        <Timer/>
        
      </div>
      <News />
    </div>
  )
}

export default Browse