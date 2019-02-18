import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ALL_ITEMS } from 'constants/items'
import './styles.scss'

export default class Icon extends PureComponent {
	render() {
		return (
			<img
				src={require(`../../static/images/${this.props.reference}.png`)}
				alt={ALL_ITEMS[this.props.reference].name}
				className={this.props.size}
			/>
		)
	}
}

Icon.propTypes = {
	reference: PropTypes.string,
	size: PropTypes.oneOf('small', 'large'),
}

Icon.defaultProps = {
	size: 'small',
}
