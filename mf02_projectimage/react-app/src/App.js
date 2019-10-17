/* eslint-disable */
import React from 'react'

import './App.css'

import reactImg from './images/react.png'
import angularImg from './images/Angular.svg'
import vueImg from './images/vue.png'

const images = {
    react: reactImg,
    vue: vueImg,
    angular: angularImg,
}

const App = ({image}) => {
    return (
        <div className="mf02_projectimage">
            <img src={images[image]}></img>
        </div>
    )
}

export default App
