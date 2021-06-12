import React, {Component} from 'react';


class ErrorBoundry extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false
		}
	}

	componentDidCatch(error, info) {
		this.setState({ hassError: true });
	}

	render() {
		if (this.state.hassError) {
			return <h1> ooops. Not good :/ </h1>
		}

		return this.props.children;
	}
} 

export default ErrorBoundry;