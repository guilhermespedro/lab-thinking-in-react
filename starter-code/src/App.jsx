import React, { Component } from 'react';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
import { Container } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Container>
        <FilterableProductTable products={data} keyword={data.name} />
      </Container>
    );
  }
}

export default App;
