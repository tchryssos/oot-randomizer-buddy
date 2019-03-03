import React, { PureComponent } from 'react'
import DisplayContext from 'contexts/display'
import Hamburger from 'static/icons/hamburger.svg'
import './styles.scss'

class Menu extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isMenuOpen: false,
		}
	}

	openMenu = () => this.setState({ isMenuOpen: true })

	render = () => (
		<DisplayContext.Consumer>
			{({ toggleView, toggleRequired, isSimpleView, isRequiredOnly }) => (
				<div className="menuWrapper">
					<button className="menuButton" onClick={this.openMenu}>
						<img src={Hamburger} alt="Hamburger menu icon" />
					</button>
					<div className={`dropDown isMenuOpen-${this.state.isMenuOpen}`}>
						<div>
							Simple View:
							<input
								type="checkbox"
								checked={isSimpleView}
								onClick={toggleView}
							/>
						</div>
						<div>
							Required Items Only:
							<input
								type="checkbox"
								checked={isRequiredOnly}
								onClick={toggleRequired}
							/>
						</div>
					</div>
				</div>
			)}
		</DisplayContext.Consumer>
	)
}

export default Menu
