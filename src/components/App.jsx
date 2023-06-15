import { Component } from 'react';
import { Contacts } from './Contacts';
import { Filter } from './Filter';


const INITIAL_STATE = {
  contacts: [],
  name: '',
}; 
export class App extends Component {

  

  state = {
    ...INITIAL_STATE
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Contacts  />
        <Filter />
      </div>
    );
  }
}

export default App;
