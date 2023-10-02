import React from 'react'
import TableContainer from './tablecontainer'

const Table = () => {
  return (
    <div className='table'>
        <div classsName='upside'>
        <section className='header'>
        <h4>Top Collections</h4>
        <section className='bg'>
            <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'#9CA3AF'}}>Total 24h volume:&nbsp;&nbsp;&nbsp;</span> <span style={{color: '#ffff'}}>856.3k ADA &nbsp;&nbsp;&nbsp;&nbsp;</span><span style={{ color: 'red' }}>↗103%</span></h3>
        </section>
        <div>
        <button className='bt'>Veiw all</button>
        </div>
        </section>
        </div>
        <div>
        <TableContainer/>
        </div>
        </div>
  )
}

export default Table