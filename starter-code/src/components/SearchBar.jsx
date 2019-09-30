import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.searchValue(event.target.value);
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="text"
            placeholder="Search"
            value={this.props.search}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Only show products in stock"
            value={this.props.checked}
            onChange={this.props.toggleChecked}
          />
        </Form.Group>
      </Form>
    );
  }
}
