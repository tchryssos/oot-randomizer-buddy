import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { ALL_ITEMS } from 'constants/items'
import DisplayContext from 'contexts/display'
import './styles.scss'

export default class Icon extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isFound: false,
			progressionStep: 0,
		}
		this.item = ALL_ITEMS[this.props.reference]
	}

	onClick = () => {
		if (this.item.progression && this.context.isProgressionMode) {
			if (!this.state.isFound) {
				this.setState({ isFound: true })
			} else {
				const progPlusOne = this.state.progressionStep + 1
				const nextProgressionStep = (
					this.item.progression[progPlusOne] ? progPlusOne : 0
				)
				if (nextProgressionStep === 0) { this.setState({ isFound: false }) }
				this.setState({ progressionStep: nextProgressionStep })
			}
		} else {
			this.setState({ isFound: !this.state.isFound })
		}
	}

	itemSelect = () => {
		if (this.item.progression && this.context.isProgressionMode) {
			return ALL_ITEMS[this.item.progression[this.state.progressionStep]]
		}
		return this.item
	}

	render() {
		const item = this.itemSelect()
		return (
			<img
				src={require(`../../static/images/${item.reference}.png`)}
				alt={this.item.name}
				className={`
					iconImage
					defaultStyles
					found-${this.state.isFound}
					${this.props.size}
				`}
				onClick={this.onClick}
				title={item.name}
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

Icon.contextType = DisplayContext
