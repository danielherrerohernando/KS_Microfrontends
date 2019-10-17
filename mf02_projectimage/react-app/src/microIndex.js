import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const fragments = () => {
    class MicroFrontend extends HTMLElement {
        log(...args) {
            console.log('mf02_projectimage-tag', ...args)
        }

        connectedCallback() {
            this.log('connected')
            this.render()
        }

        disconnectedCallback() {
            this.log('disconnected')
        }

        static get observedAttributes() {
            return ['framework']
        }

        attributeChangedCallback() {
            this.render()
        }

        render() {
            ReactDOM.render(<App image={this.getAttribute('framework')} />, this)
        }
    }
    window.customElements.define('mf02_projectimage-tag', MicroFrontend)
}

fragments()
