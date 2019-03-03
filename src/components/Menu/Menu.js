import React, { PureComponent } from 'react'
import DisplayContext from 'contexts/display'
import Hamburger from 'static/icons/hamburger.svg'
import { ViewCheckbox } from './components'
import './styles.scss'

class Menu extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isMenuOpen: false,
		}
	}

	openMenu = () => this.setState({ isMenuOpen: true })
	closeMenu = () => this.setState({ isMenuOpen: false })

	render = () => (
		<DisplayContext.Consumer>
			{({
				toggleView,
				toggleRequired,
				toggleProgressionMode,
				isSimpleView,
				isRequiredOnly,
				isProgressionMode,
			}) => (
				<div className="menuWrapper">
					<button className="menuButton" onClick={this.openMenu}>
						<img src={Hamburger} alt="Hamburger menu icon" />
					</button>
					<div className={`dropDown isMenuOpen-${this.state.isMenuOpen}`}>
						<button
							className="closeButton menuButton"
							onClick={this.closeMenu}
						>
							X
						</button>
						<ViewCheckbox
							label="Simple View"
							onClick={toggleView}
							checkedValue={isSimpleView}
						/>
						<ViewCheckbox
							label="Required Items Only"
							onClick={toggleRequired}
							checkedValue={isRequiredOnly}
						/>
						<ViewCheckbox
							label="Item Progression Mode"
							onClick={toggleProgressionMode}
							checkedValue={isProgressionMode}
						/>
					</div>
				</div>
			)}
		</DisplayContext.Consumer>
	)
}

export default Menu
