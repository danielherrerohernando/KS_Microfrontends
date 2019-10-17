/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'

import './App.css'

import reactImg from './images/react.png'
import angularImg from './images/Angular.svg'
import vueImg from './images/vue.png'

const images = {
    React: reactImg,
    Vue: vueImg,
    Angular: angularImg,
}

const App = ({image}) => {
    return (
        <div className="mf02_projectimage">
            <img src={images[image]}></img>
        </div>
    )
}

App.propTypes = {
    image: PropTypes.string,
}

export default App
