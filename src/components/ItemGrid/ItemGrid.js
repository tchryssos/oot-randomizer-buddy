import React, { PureComponent } from 'react'
import DisplayContext from 'contexts/display'
import { ORDERED_ITEMS, ORDERED_SONGS, ORDERED_SEALS } from 'constants/items'
import { Icon } from 'components'
import './styles.scss'

export default class ItemGrid extends PureComponent {
	gridBuilder = collection => (
		collection
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
	itemGrid = () => this.gridBuilder(ORDERED_ITEMS)
	songGrid = () => this.gridBuilder(ORDERED_SONGS)
	sealsGrid = () => this.gridBuilder(ORDERED_SEALS)

	render() {
		return (
			<div className="itemContainer">
				<div className="itemGridLabel">Items</div>
				{this.itemGrid()}
				<div className="itemGridLabel">Songs</div>
				{this.songGrid()}
				<div className="itemGridLabel">Seals</div>
				{this.sealsGrid()}
			</div>
		)
	}
}

ItemGrid.contextType = DisplayContext
