import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

import './App.css'

const App = ({refreshName, refreshFramework}) => {
    const [name, setName] = React.useState('')
    const [selectedOption, setOption] = React.useState('')
    const options = [
        {value: 'React', label: 'React'},
        {value: 'Angular', label: 'Angular'},
        {value: 'Vue', label: 'Vue'},
    ]
    return (
        <div className="mf01_projectdata">
            <label>Project Name:</label>
            <input
                className="input"
                id="name"
                type="text"
                value={name}
                onChange={e => {
                    refreshName(e.target.value)
                    setName(e.target.value)
                }}
            ></input>
            <label>Selected framework:</label>
            <Select
                value={selectedOption}
                onChange={e => {
                    refreshFramework(e)
                    setOption(e)
                }}
                options={options}
            />
        </div>
    )
}
App.propTypes = {
    refreshName: PropTypes.func,
    refreshFramework: PropTypes.func,
}

export default App
