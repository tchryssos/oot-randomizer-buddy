import React from 'react'
import DisplayContext from 'contexts/display'
import './styles.scss'

const NavBar = () => (
	<DisplayContext.Consumer>
		{({ setSimple, setComplex }) => (
			<div className="navBar">
				<button
					className="viewButton"
					onClick={setSimple}
				>
					Simple View
				</button>
				<button
					className="viewButton"
					onClick={setComplex}
					name="Complex View"
				>
					Complex View
				</button>
			</div>
		)}
	</DisplayContext.Consumer>
)

export default NavBar
