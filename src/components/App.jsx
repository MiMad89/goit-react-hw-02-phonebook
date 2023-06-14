import { Component } from "react";
import {Contacts} from './Contacts'
import {Filter} from './Filter'

export class App extends Component {
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Contacts />
        <Filter />
      </div>
    );
  }
}

export default App;