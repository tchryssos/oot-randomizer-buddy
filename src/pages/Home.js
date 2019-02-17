import React, { PureComponent } from 'react'
import SimpleView from './SimpleView'
import ComplexView from './ComplexView'

export default class Home extends PureComponent {
	constructor() {
		super()
		this.state = {
			isSimpleView: false,
		}
	}

	render() {
		return this.state.isSimpleView ? <SimpleView /> : <ComplexView />
	}
}
