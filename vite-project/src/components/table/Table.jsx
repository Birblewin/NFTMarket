import React from 'react'
import TableContainer from './tablecontainer'

const Table = () => {
  return (
    <div className='table'>
        <div>
        <h4>Top Collections</h4>
        <button className='bt'>Veiw all</button>
        </div>
        <div className='ratings'>

        </div>
        <div>
        <TableContainer/>
        </div>
        </div>
  )
}

export default Table