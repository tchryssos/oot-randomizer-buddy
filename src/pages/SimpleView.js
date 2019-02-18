import React, { PureComponent } from 'react'
import { ITEMS } from 'constants/items'
import { Icon } from 'components'

export default class SimpleView extends PureComponent {
	test = () => (
		Object.keys(ITEMS).map(itemRef => <Icon size="large" reference={itemRef} />)
	)
	render() {
		return (
			<div>
				{this.test()}
			</div>
		)
	}
}
