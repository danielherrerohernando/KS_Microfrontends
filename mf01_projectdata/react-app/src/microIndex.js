import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

const fragments = () => {
    class MicroFrontend extends HTMLElement {
        log(...args) {
            console.log('mf01_projectdata-tag', ...args)
        }

        connectedCallback() {
            this.log('connected')
            this.render()
        }

        disconnectedCallback() {
            this.log('disconnected')
        }

        refreshName(name) {
            this.dispatchEvent(
                new CustomEvent('projectname:changed', {
                    bubbles: true,
                    detail: name,
                }),
            )
        }
        refreshFramework(framework) {
            this.dispatchEvent(
                new CustomEvent('projectframework:changed', {
                    bubbles: true,
                    detail: framework,
                }),
            )
        }
        render() {
            ReactDOM.render(
                <App refreshName={this.refreshName.bind(this)} refreshFramework={this.refreshFramework.bind(this)} />,
                this,
            )
        }
    }

    window.customElements.define('mf01_projectdata-tag', MicroFrontend)
}

fragments()
