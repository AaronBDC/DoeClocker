import React, { useContext, useState } from 'react'
import { SettingsContext } from '../context/SettingsContext'
import ToggleSwitch from "./ToggleSwitch";

const SetPomodoro = () => {

    // const [newTimer, setNewTimer] = useState({
    //     work: 0.2,
    //     short: 0.1,
    //     long: 0.5,
    //     active: 'work'
    // })
    
    // // below is set for 45 seconds, 10 seconds, and 25 seconds
    // const [newTimer, setNewTimer] = useState({
    //     work: 45,
    //     short: 10,
    //     long: 25,
    //     active: 'short'
    // })

    // below is set for 45 seconds, 10 seconds, and 25 seconds
    const [newTimerS, setNewTimerS] = useState({
        work: 45,
        short: 10,
        long: 25,
        active: 'short'
    })

    // below is set for 45 minutes, 10 minutes, and 25 minutes
    const [newTimer, setNewTimer] = useState({
        work: 45 * 60,
        short: 10 * 60,
        long: 25 * 60,
        active: 'work'
    })

    const {updateExecute} = useContext(SettingsContext)

    const handleChange = input => {
        const {name, value} = input.target
        switch (name) {
            case 'work':
                setNewTimer({
                    ...newTimer,
                    work: parseInt(value)
                })
                break;
            case 'shortBreak':
                setNewTimer({
                    ...newTimer,
                    short: parseInt(value)
                })
                break;
            case 'longBreak':
                setNewTimer({
                    ...newTimer,
                    long: parseInt(value)
                })
                break;
        }
    }

    const handleSubmit = e => {
        e.preventDefault()
        updateExecute(newTimer)
    }
    return (
        <div className="form-container">
            <form noValidate onSubmit={handleSubmit}>
                <td>


                <div className="input-wrapper">
                    <input className="input" type="number" name="work" onChange={handleChange} value={newTimer.work} />
                </div>
                <div className="input-wrapper2">
                    <input className="input" type="number" name="shortBreak" onChange={handleChange} value={newTimer.short} />
                </div>
                <div className="input-wrapper3">
                    <input className="input" type="number" name="longBreak" onChange={handleChange} value={newTimer.long} />
                </div>
                </td>              
                <button type='submit'>Set Timer</button>
                {/* <label>
                    Which tune?
                </label>
                <select>
                    <option value="song1">song1.mp3</option>
                    <option value="song2">song2.mp3</option>
                    <option value="song3">song3.mp3</option>
                    <option value="song4">song3.mp3</option>
                </select>
                <button type='button'>▶️Test Alarm</button> */}

            </form>
            <React.Fragment>
                <ToggleSwitch label="Time" />
            </React.Fragment>
        </div>
    )
}

export default SetPomodoro
