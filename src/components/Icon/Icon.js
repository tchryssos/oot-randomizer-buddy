import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ALL_ITEMS } from 'constants/items'
import './styles.scss'

export default class Icon extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isFound: false,
		}
	}

	toggleItemFound = () => this.setState({ isFound: !this.state.isFound })

	render() {
		return (
			<img
				src={require(`../../static/images/${this.props.reference}.png`)}
				alt={ALL_ITEMS[this.props.reference].name}
				className={`
					iconImage
					defaultStyles
					found-${this.state.isFound}
					${this.props.size}
				`}
				onClick={this.toggleItemFound}
			/>
		)
	}
}

Icon.propTypes = {
	reference: PropTypes.string,
	size: PropTypes.oneOf(['small', 'large']),
}

Icon.defaultProps = {
	size: 'large',
}
