import React, { Component } from 'react';
import './table.css'; // Import the CSS file

class TableContainer extends React.Component {
  render() {
    let data = [
      { id: 1, Collections: "Reezy", Volume: 757,Floors: 444 , Owners: 34 },
      { id: 2, Collections: "Supper", Volume: 25, Floors:445 , Owners: 34 },
      { id: 3, Collections: "Ape", Volume: 30 , Floors: 544, Owners: 56 },
      { id: 4, Collections: "New", Volume: 25 ,Floors: 543, Owners: 77 },
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
                <td>{item.Volume}</td>
                <td>{item.Floors}</td>
                <td>{item.Owners}</td>
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
                <td>{item.Volume}</td>
                <td>{item.Floors}</td>
                <td>{item.Owners}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableContainer;
