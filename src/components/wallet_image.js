import React, {Component} from 'react';
import WalletList from '../containers/wallet_list';


export default class WalletImage extends Component {
		constructor(props) {
		super(props);

		this.state = { imageSource: "data:image/jpeg;base64," + this.props.image};

	}

	render() {
		return (
			<div>
				<img className="walletImage" src={this.state.imageSource} />
			</div>
			)
	}
}
