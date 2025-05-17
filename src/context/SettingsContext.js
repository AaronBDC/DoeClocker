import React from "react";
import { useState, createContext } from "react";
// import audioFile from './path/to/audio/file.mp3'; //added for mp3
import audioFile1 from '../alarms/begin_00.mp3'; //added for mp3
import audioFile2 from '../alarms/begin_01.wav'; //added for mp3
import audioFile3 from '../alarms/end_00.mp3'; //added for mp3 -- works!
import audioFile4 from '../alarms/end_01.wav'; //added for mp3

//updates for toggle switch


export const SettingsContext = createContext();

function SettingsContextProvider(props) {
  /**
   * Updates via youchat 
   *   how can you make react play a way or mp3 file when a timer has expired for an alarm?
   *     To make React play an audio file (e.g. WAV or MP3) 
   *            when a timer has expired for an alarm,
   *         you can use the HTML5 <audio> element and
   *              the useEffect hook in React. 
   *  Here are the general steps:
   *  1.	Import the audio file into your React component as a variable using import audioFile from './path/to/audio/file.mp3';.
   *  2.	Create a state variable to keep track of whether the alarm has expired (e.g. const [alarmExpired, setAlarmExpired] = useState(false);).
   *  3.	Use the useEffect hook to conditionally play the audio file when the alarmExpired state variable is true, like so:

   * 
   */
  ///start
            // ///defaukt ex:
            // useEffect(() => {
            //   if (alarmExpired) {
            //     const audio = new Audio(audioFile);
            //     audio.play();
            //   }
            // }, [alarmExpired, audioFile]);

// ///defaukt ex:
// useEffect(() => {
//   if (alarmExpired) {
//     const audio = new Audio(audioFile1);
//     audio.play();
//   }
// }, [alarmExpired, audioFile1]);

//  4.	In the function that handles the timer expiration (e.g. handleTimerExpiration()), set the alarmExpired state variable to true.
// Note that the above code assumes that you have already implemented the timer functionality and that the handleTimerExpiration() function is called when the timer expires. Also, make sure that the audio file is in a format that is supported by the user's browser.



  ///end
  const [pomodoro, setPomodoro] = useState(0);
  const [executing, setExecuting] = useState({});
  const [startAnimate, setStartAnimate] = useState(false);

  function setCurrentTimer(active_state) {
    updateExecute({
      ...executing,
      active: active_state,
    });
    setTimerTime(executing);
  }

  // start animation fn
  function startTimer() {
    setStartAnimate(true);
  }
  // pause animation fn
  function pauseTimer() {
    setStartAnimate(false);
  }
  // // pass time to counter - OLD
  // const children = ({ remainingTime }) => {
  //   const minutes = Math.floor(remainingTime / 60);
  //   const seconds = remainingTime % 60;

  //   return `${minutes}:${seconds}`;
  // };
  // pass time to counter - NEW
  const children = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    return `${minutes}:${seconds}`;
  };

  // clear session storage
  const SettingsBtn = () => {
    setExecuting({});
    setPomodoro(0);
  };

  const updateExecute = (updatedSettings) => {
    setExecuting(updatedSettings);
    setTimerTime(updatedSettings);
  };

  const setTimerTime = (evaluate) => {
    switch (evaluate.active) {
      case "work":
        setPomodoro(evaluate.work);
        break;
      case "short":
        setPomodoro(evaluate.short);
        break;
      case "long":
        setPomodoro(evaluate.long);
        break;
      default:
        setPomodoro(0);
        break;
    }
  };

  function stopAimate1() {
    setStartAnimate(false);
    const audio = new Audio(audioFile3);
    //let alrm = document.getElementById("myVideo");
    //vid.volume = 0.2;
    audio.volume = 0.2;
    audio.play();
  }
  function stopAimate2() {
    setStartAnimate(false);
    const audio = new Audio(audioFile4);
    audio.play();
  }
  function stopAimate3() {
    setStartAnimate(false);
    const audio = new Audio(audioFile4);
    audio.play();
  }

  return (
    <SettingsContext.Provider
      value={{
        pomodoro,
        executing,
        updateExecute,
        startAnimate,
        startTimer,
        pauseTimer,
        children,
        SettingsBtn,
        setCurrentTimer,
        stopAimate1,
        stopAimate2,
        stopAimate3,
      }}
    >
      {props.children}

    </SettingsContext.Provider>
  );
}

export default SettingsContextProvider;
