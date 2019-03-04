import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import DisplayContext from 'contexts/display'
import Chevron from 'static/icons/chevron.svg'
import { Icon } from 'components'
import '../styles.scss'

export default class Grid extends PureComponent {
	constructor(props) {
		super(props)
		this.state = {
			isGridShowing: true,
		}
	}

	gridBuilder = () => (
		this.props.collection
			.filter(item => (this.context.isRequiredOnly ? item.critical : item))
			.filter((item) => {
				if (this.context.isProgressionMode && item.progression) {
					return item.reference === item.progression[0]
				}
				return item
			})
			.map((item, i) => (
				<Icon
					key={`${item.reference}-${i}`}
					reference={item.reference}
				/>
			))
	)

	render = () => (
		<>
			<div className="itemGridLabel">
				{this.props.label}
				<img src={Chevron} alt="close section chevron" />
			</div>
			<div className={`showGrid-${this.state.isGridShowing}`}>
				{this.gridBuilder()}
			</div>
		</>
	)
}

Grid.propTypes = {
	collection: PropTypes.array,
	label: PropTypes.string,
}

Grid.contextType = DisplayContext
