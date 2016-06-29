import React, { Component } from 'react';
import WalletList from '../containers/wallet_list.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>List from Firebase</h1>
      	<WalletList />
      </div>
    );
  }
}
