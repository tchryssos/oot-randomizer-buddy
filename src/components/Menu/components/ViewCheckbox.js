import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import '../styles.scss'

export default class ViewCheckbox extends PureComponent {
	render() {
		return (
			<div className="menuRow">
				{this.props.label}:
				<input
					type="checkbox"
					checked={this.props.checkedValue}
					onClick={this.props.onClick}
					className="viewCheckbox"
					readOnly
				/>
			</div>
		)
	}
}

ViewCheckbox.propTypes = {
	checkedValue: PropTypes.bool,
	onClick: PropTypes.func,
	label: PropTypes.string,
}
