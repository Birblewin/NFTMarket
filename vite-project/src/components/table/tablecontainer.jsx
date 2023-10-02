import React, { Component } from 'react';
import './table.css'; // Import the CSS file

class TableContainer extends React.Component {
  render() {
    let data = [
      { id: 1, Collections: "Reezy", Volume: [757, "1.20%"],Floors: [444, "6.05%" ] , Owners: [34, "2.05%"] },
      { id: 2, Collections: "Earthnodes", Volume: [787, "3.90%"],Floors: [446, "7.90%" ] , Owners: [34, "2.05%"] },
      { id: 3, Collections: "Solitary", Volume: [770, "1.86%"],Floors: [678, "4.07%" ] , Owners: [34, "2.05%"] },
      { id: 4, Collections: "Justuse", Volume: [857, "3.89%"],Floors: [784, "3.09%" ] , Owners: [34, "2.05%"] },
      { id: 5, Collections: "CrazyPie", Volume: [977, "3.35%"],Floors: [408, "5.57%" ] , Owners: [34, "2.05%"] },
      { id: 6, Collections: "Enegri", Volume: [457, "4.46%"],Floors: [874, "3.46%" ] , Owners: [34, "2.05%"] },
      // Add more objects as needed
    ];

    return (
      <div className="TableContainer">
        <table>
          <thead>
            <tr>
              <th>Collections</th>
              <th>Volume</th>
              <th>Floors</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                
                <td>{item.Collections}</td>
                <td className='table-cell'><span>{item.Volume[0]}</span><span>{item.Volume[1]}</span></td>
                <td className='table-cell'><span>{item.Floors[0]}</span><span>{item.Floors[1]}</span></td>
                <td className='table-cell'><span>{item.Owners[0]}</span><span>{item.Owners[1]}</span></td>
              </tr>
            ))}
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Collections</th>
              <th>Volume</th>
              <th>Floors</th>
              <th>Owner</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                
              <td>{item.Collections}</td>
              <td className='table-cell'><span>{item.Volume[0]}</span><span>{item.Volume[1]}</span></td>
              <td className='table-cell'><span>{item.Floors[0]}</span><span>{item.Floors[1]}</span></td>
              <td className='table-cell'><span>{item.Owners[0]}</span><span>{item.Owners[1]}</span></td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableContainer;
