import React from 'react';
import Blocks from './blocks.jsx';

const style = {
	display: 'flex'
}

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: 1,
					title: 'Hello 1',
					color:'#bbbbbb'
				},
				{
					id: 2,
					title: 'Hello 2',
					color:'red'
				},
				{
					id: 3,
					title: 'Hello 3',
					color:'blue'
				},
				{
					id: 4,
					title: 'Hello 4',
					color:'green'
				},
				{
					id: 5,
					title: 'Hello 5',
					color:'pink'
				},
				{
					id: 6,
					title: 'Hello 6',
					color:'#a125b9'
				},
				{
					id: 7,
					title: 'Hello 7',
					color:'#ab78b5'
				},
				{
					id: 8,
					title: 'Hello 8',
					color:'#564d52'
				},
				{
					id: 9,
					title: 'Hello 9',
					color:'#d47e18'
				},
				{
					id: 10,
					title: 'Hello 10',
					color:'#46392a'
				}
			]
		}
	}

	setNewData(id, title, color) {
		var newData = this.state.data;
		newData.forEach(item => {
			if (item.id === id) {
				item.title = title;
				item.color = color;
			}
		});
		this.setState({
			data: newData
		})
	}

	render() {
		return <div style={style}>
			{
				this.state.data.map((item, i) => {
					return <Blocks key={i} id={item.id} title={item.title} color={item.color} edit={(id, title, color) => this.setNewData(id, title, color)} />
				})
			}
		</div>
	}
}