import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import ProductRow from './ProductRow';

export default class ProductTable extends Component {
  constructor(props) {
    super(props);

    this.data = this.props.data.data;
  }

  get filteredFoodList() {
    const filteredFood = this.data.filter(product =>
      product.name.toLowerCase().includes(this.props.search.toLowerCase())
    );
    if (!this.props.checked) {
      return filteredFood.filter(product => product.stocked);
    } else {
      return filteredFood;
    }
  }
  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.filteredFoodList.map(product => (
              <ProductRow key={product.name} product={product}></ProductRow>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
