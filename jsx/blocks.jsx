import React from 'react';
import { SketchPicker } from 'react-color';

const styleBlock = {
	base: {
		margin: '10px 10px',
		width: '100px',
		height: '100px',
		border: '1px solid black',
		cursor: 'pointer',
		padding: '5px',
		textAlign: 'center',
		color: 'white'
	},
	bgc: {
		backgroundColor: 'red'
	}
};

export default class Blocks extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isShow: false
		}
	}

	handleSwap() {
		this.setState({
			isShow: !this.state.isShow
		})
	}

	editBlock(id, title, color) {
		if(title.length > 13) {

		}
		this.props.edit(id, title, color)
		this.setState({
			isShow: !this.state.isShow
		})
	}

	getStatic(id, title, color) {
		return <div onClick={this.handleSwap.bind(this)} style={Object.assign({}, styleBlock.base, styleBlock.bgc)}><p>{title}</p></div>
	}

	getEdit(id, title, color) {
		return <div style={Object.assign({}, styleBlock.base, styleBlock.bgc)}>
			<input type='text' ref='inputTitle' placaholder='Input title' defaultValue={title} />
			<input type='text' ref='inputCollor' placaholder='Input color' defaultValue={color} />
			<button onClick={() => this.editBlock(id, this.refs.inputTitle.value, this.refs.inputCollor.value)}>Save</button>
			<button onClick={this.handleSwap.bind(this)}>Cencel</button>
		</div>
	}

	render() {
		const { id, title, color } = this.props
		styleBlock.bgc['backgroundColor'] = color;
		return this.state.isShow === false ? this.getStatic(id, title, color) : this.getEdit(id, title, color)
	}
}