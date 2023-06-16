import { Component } from 'react';
import css from './Filter.module.css';

export class Filter extends Component {
  handleFilter = e => {
    const { value } = e.target;
    this.props.onChange(value);
  };

  render() {
    return (
       <h3>Find contacts by name</h3> 
       
    )
  }
}
