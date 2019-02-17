import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

export default class NavBar extends PureComponent {
	render() {
		return (
			<div className="navBar">
				<button
					className="viewButton"
					onClick={this.props.setSimple}
				>
					Simple View
				</button>
				<button
					className="viewButton"
					onClick={this.props.setComplex}
					name="Complex View"
				>
					Complex View
				</button>
			</div>
		)
	}
}

NavBar.propTypes = {
	setComplex: PropTypes.func,
	setSimple: PropTypes.func,
}
