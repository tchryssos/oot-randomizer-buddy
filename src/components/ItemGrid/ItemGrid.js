import React from 'react'
import { ORDERED_ITEMS, ORDERED_SONGS, ORDERED_SEALS } from 'constants/items'
import { Grid } from './components'
import './styles.scss'

const ItemGrid = () => (
	<div className="itemContainer">
		<Grid collection={ORDERED_ITEMS} label="Items" />
		<Grid collection={ORDERED_SONGS} label="Songs" />
		<Grid collection={ORDERED_SEALS} label="Seals" />
	</div>
)

export default ItemGrid
