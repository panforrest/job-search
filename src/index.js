import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import Feed from './components/Feed'


const app = (
	<div>
        <Feed />
	</div>
)


ReactDOM.render(app, document.getElementById('root'))