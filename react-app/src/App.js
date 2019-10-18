/* eslint-disable */
import React from 'react'

import './App.css'

const App = () => {
    const [projectName, setProjectName] = React.useState('')
    const [frameworkName, setFrameworkName] = React.useState('')

    const [isActive, toggleVue] = React.useState(false)

    React.useEffect(() => {
        document.addEventListener('projectname:changed', ({detail}) => setProjectName(detail))
        document.addEventListener('projectframework:changed', ({detail}) => setFrameworkName(detail.value))
        return () => {
            document.removeEventListener('projectname:changed', ({detail}) => setProjectName(detail))
            document.removeEventListener('projectframework:changed', ({detail}) => setFrameworkName(detail.value))
        }
    }, [])

    return (
        <>
            <div id="skeleton">
                <div className="skeleton-app">
                    <header className="skeleton-app-header">
                        <h2>Project Name</h2>
                        <h1>{projectName}</h1>
                    </header>
                    <button className="superbutton" onClick={() => toggleVue(!isActive)}>
                        Press me!
                    </button>
                    <div className="skeleton-app-body">
                        <p>Chosen framework</p>
                        <h3>{frameworkName}</h3>
                    </div>
                    <div className="boxes">
                        <mf01_projectdata-tag></mf01_projectdata-tag>
                        <mf02_projectimage-tag framework={frameworkName}></mf02_projectimage-tag>
                        {isActive && (
                            <div>
                                <mf03_vuetest-tag></mf03_vuetest-tag>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
