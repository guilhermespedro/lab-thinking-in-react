import React, { Component } from 'react';

export default class ProductRow extends Component {
  render() {
    const product = this.props.product;

    let color = 'red';
    if (product.stocked) {
      color = 'black';
    }

    return (
      <tr>
        <td style={{ color: color }}>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}
