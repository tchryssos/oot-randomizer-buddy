import React, { PureComponent } from 'react'
import DisplayContext from 'contexts/display'
import { SimpleView, ComplexView, NavBar } from 'components'
import './styles.scss'

export default class Home extends PureComponent {
	constructor() {
		super()
		const setComplex = () => this.setState({ isSimpleView: false })
		const setSimple = () => this.setState({ isSimpleView: true })
		const toggleRequired = () => this.setState({
			isRequiredOnly: !this.state.isRequiredOnly,
		})
		const toggleProgressionMode = () => this.setState({
			isProgressionMode: !this.state.isProgressionMode,
		})
		this.state = {
			isSimpleView: true,
			isRequiredOnly: true,
			isProgressionMode: false,
			setSimple,
			setComplex,
			toggleRequired,
			toggleProgressionMode,
		}
	}
	viewSwitcher = () => (this.state.isSimpleView ? <SimpleView /> : <ComplexView />)

	render() {
		return (
			<DisplayContext.Provider value={this.state}>
				<div className="homeWrapper">
					<NavBar />
					{this.viewSwitcher()}
				</div>
			</DisplayContext.Provider>
		)
	}
}
