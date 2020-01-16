import React, { Component } from 'react';
import { message, Button } from 'antd';
import './App.css';

const info = () => {
	message.info('This is a normal message');
};

const error = () => {
	message.error('This is a danger message');
};

// 应用的根组件
class App extends Component {
	render() {
		return (
			<div className="APP">
				<Button type="primary" onClick={info}>
					Button
				</Button>
				<Button type="danger" onClick={error}>
					error
				</Button>
			</div>
		);
	}
}

export default App;

