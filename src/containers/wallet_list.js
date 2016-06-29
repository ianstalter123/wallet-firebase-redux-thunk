import React, { Component } from 'react';
import { getWallets } from '../actions';
import { connect } from 'react-redux';
import WalletImage from '../components/wallet_image.js'

class WalletList extends Component {
	componentWillMount() {
		this.props.getWallets();
	}

	renderList() {
		const { wallets } = this.props;
		const listItems = Object.keys(wallets);

		return listItems.map(wallet => (
			<div>
				<li key={wallet}>{wallets[wallet].name}</li>
				<WalletImage key={wallets[wallet].name} image={wallets[wallet].image}/>
			</div>
		));
	}

	render() {
		return (
			<div>
				<h3>Hello World</h3>
				<ul>
					{this.renderList()}
	   		</ul>
			</div>
		)
	}

}

const mapStateToProps = ({wallets}) => ({wallets});

export default connect(mapStateToProps, { getWallets })(WalletList);
