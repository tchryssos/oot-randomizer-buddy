import React, { PureComponent } from 'react'
import DisplayContext from 'contexts/display'
import { ORDERED_ITEMS } from 'constants/items'
import { Icon } from 'components'
import './styles.scss'

export default class ItemGrid extends PureComponent {
	itemGrid = () => (
		ORDERED_ITEMS
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
	render() {
		return (
			<div className="itemContainer">
				{this.itemGrid()}
			</div>
		)
	}
}

ItemGrid.contextType = DisplayContext
