import React, { PureComponent } from 'react'
import { ITEMS } from 'constants/items'
import { Icon } from 'components'
import './styles.scss'

export default class SimpleView extends PureComponent {
	itemGrid = () => (
		Object.keys(ITEMS)
			.filter(itemRef => ITEMS[itemRef].critical)
			.map(itemRef => <Icon size="large" reference={itemRef} />)
	)
	render() {
		return (
			<div className="simpleItemContainer">
				{this.itemGrid()}
			</div>
		)
	}
}
