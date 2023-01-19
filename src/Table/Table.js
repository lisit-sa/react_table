import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';

class Table extends Component {
    constructor(props) {
        super(props);
      }
    render() {
        
        return (
            
        <table>
            <thead>
              <tr>
                  <th onClick={this.props.onSort.bind(null, 'id')}>Id
                 </th>
                  <th onClick={this.props.onSort.bind(null, 'firstName')}>First Name</th>

                  <th onClick={this.props.onSort.bind(null, 'lastName')}>Last Name</th>

                  <th onClick={this.props.onSort.bind(null, 'email')}>Email</th>

                  <th onClick={this.props.onSort.bind(null, 'phone')}>Phone</th>

                  <th onClick={this.props.onSort.bind(null, 'description')}>description</th>
              </tr>
            </thead>
            <tbody>
            {this.props.items.map(item => (
            <tr key={item.id + item.phone}>
                <td>
                    {item.id}
                </td>
                <td>
                    {item.firstName}
                </td>
                <td>
                    {item.lastName}
                </td>
                <td>
                    {item.email}
                </td>
                <td>
                    {item.phone}
                </td>
                <td>
                    {item.description}
                </td>
            </tr>
            ))}
          </tbody>
          
          
      </table>
        )
            
        
        
    }
}

export default Table;