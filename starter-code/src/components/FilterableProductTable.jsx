import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Figure from 'react-bootstrap/Figure';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: '',
      checked: true
    };

    this.searchValue = this.searchValue.bind(this);
    this.toggleChecked = this.toggleChecked.bind(this);
  }
  searchValue(search) {
    this.setState({
      ...this.state,
      search
    });
  }

  toggleChecked() {
    this.setState({ ...this.state, checked: !this.state.checked });
  }

  render() {
    const data = this.props.products;

    return (
      <div>
        <h1>IronStore</h1>
        <SearchBar
          search={this.state.search}
          checked={this.state.checked}
          searchValue={search => this.searchValue(search)}
          toggleChecked={this.toggleChecked}
        ></SearchBar>
        <ProductTable
          data={data}
          checked={this.state.checked}
          search={this.state.search}
        ></ProductTable>
      </div>
    );
  }
}
