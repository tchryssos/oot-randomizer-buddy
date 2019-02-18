import React, { PureComponent } from 'react'
import { SimpleView, ComplexView, NavBar } from 'components'
import './styles.scss'

export default class Home extends PureComponent {
	constructor() {
		super()
		this.state = {
			isSimpleView: true,
		}
	}
	setComplex = () => this.setState({ isSimpleView: false })
	setSimple = () => this.setState({ isSimpleView: true })
	viewSwitcher = () => (this.state.isSimpleView ? <SimpleView /> : <ComplexView />)

	render() {
		return (
			<div className="homeWrapper">
				<NavBar setComplex={this.setComplex} setSimple={this.setSimple} />
				{this.viewSwitcher()}
			</div>
		)
	}
}
