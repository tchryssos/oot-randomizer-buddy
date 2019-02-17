import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Home } from 'pages'
import './styles/main.scss'

render(
	<div>
		<BrowserRouter>
			<Home />
		</BrowserRouter>
	</div>,
	document.getElementById('app'),
)
