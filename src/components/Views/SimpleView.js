import React, { PureComponent } from 'react'
import { ORDERED_ITEMS } from 'constants/items'
import { Icon } from 'components'
import './styles.scss'

export default class SimpleView extends PureComponent {
	itemGrid = () => (
		ORDERED_ITEMS
			.filter(item => item.critical)
			.map(item => <Icon key={item.ref} size="large" reference={item.ref} />)
	)
	render() {
		return (
			<div className="simpleItemContainer">
				{this.itemGrid()}
			</div>
		)
	}
}
