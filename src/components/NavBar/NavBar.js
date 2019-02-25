import React from 'react'
import DisplayContext from 'contexts/display'
import './styles.scss'

const NavBar = () => (
	<DisplayContext.Consumer>
		{({ toggleView, toggleRequired }) => (
			<div className="navBar">
				<button
					className="viewButton"
					onClick={toggleView}
				>
					Toggle Item List View
				</button>
				<button
					className="viewButton"
					onClick={toggleRequired}
				>
					Show Only Required Items
				</button>
			</div>
		)}
	</DisplayContext.Consumer>
)

export default NavBar
