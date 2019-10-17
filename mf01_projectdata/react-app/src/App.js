import React from 'react'
import Select from 'react-select'

import './App.css'

const App = () => {
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
            <input className="input" id="name" type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <label>Selected framework:</label>
            <Select value={selectedOption} onChange={setOption} options={options} />
        </div>
    )
}

export default App
