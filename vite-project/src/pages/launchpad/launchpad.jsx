import React from 'react'
import Launchpadcontainer from './Launchpadcontainer'
import Overviewteam from './columns/overview-team'
const Launchpad = () => {
  return (
    <div className='Launchpad-container'>
      <Launchpadcontainer/>
      <Overviewteam/>
    </div>
  )
}

export default Launchpad