import React, { PureComponent } from 'react'
import DisplayContext from 'contexts/display'
import { SimpleView, ComplexView, Menu } from 'components'
import './styles.scss'

export default class Home extends PureComponent {
	constructor() {
		super()
		const toggleView = () => this.setState({
			isSimpleView: !this.state.isSimpleView,
		})
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
			toggleView,
			toggleRequired,
			toggleProgressionMode,
		}
	}
	viewSwitcher = () => (this.state.isSimpleView ? <SimpleView /> : <ComplexView />)

	render() {
		return (
			<DisplayContext.Provider value={this.state}>
				<div className="homeWrapper">
					<Menu />
					{this.viewSwitcher()}
				</div>
			</DisplayContext.Provider>
		)
	}
}
