import './App.css'
import React, { Component } from 'react'
import Table from "./Table/Table.js"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      sort: 'asc',
      sortField: 'id'
    };
  }

  componentDidMount() {
    fetch("http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}")
      .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            items: res
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  onSort = sortField => {
    let copy = Object.assign([], this.state.items);
    if(this.state.sort === 'asc') {
      copy.sort((a, b) => a[sortField] > b[sortField] ? 1 : -1);
      this.setState({
        sort: 'desc',
        sortField: sortField,
        items: copy
      });
    } else {
      copy.sort((a, b) => b[sortField] > a[sortField] ? 1 : -1);
      this.setState({
        sort: 'asc',
        sortField: sortField,
        items: copy
      });
    }
  }

  render() {
    const { error, isLoaded, items, sort, sortField} = this.state;

    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <Table items={items}
          onSort={this.onSort}
          sort={sort}
          sortField={sortField}
        />
      ) 
     
    }
  }

}

export default App;
