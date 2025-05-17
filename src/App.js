import React, { useEffect, useContext } from "react";
import Button from "./components/Button";
import CountdownAnimation from "./components/CountdownAnimation";
import SetPomodoro from "./components/SetPomodoro";
import { SettingsContext } from "./context/SettingsContext";
import Config from "./components/Config";
import ConfigVert from "./components/ConfigVert";
import Profile from "./components/Profile";
import Options from "./components/Options";
import ButtonGrid from "./components/ButtonGrid";

// import logoImage1 from "./images/264-2643663_double-dare-logo.png";
// import logoImage1 from "./images/DOE_CLOCKER.png";
// import logoImage1 from "./images/technique.png";
import logoImage1 from "./images/technique.png";
import logoImageX from "./images/001-surfer.png";
import logoImage2 from "./images/264-2643663_double-dare-logo.jpg";
import logoImage3 from "./images/309-3095317_nick-double-dare-logo.png";
import logoImage4 from "./images/247-2470259_logopedia10-original-double-dare-logo-hd-png-download.png";
import logoImage5 from "./images/309-3095317_nick-double-dare-logo.png";
// import logoImage6 from "./images/009-hurdles race.png";
// import logoImage7 from "./images/regular_show_on_double_dare_by_djgames_daoz0l5-fullview.jpg";
// import logoImage8 from "./images/star_and_diazs_on_double_dare_by_djgames_daoz00p-fullview.jpg";
import logoImage9 from "./images/009-hurdles race.png";

///updates for toggle switch
/***
        // Filename: App.js

        import React, { Component } from "react";
        import ToggleSwitch from "./components/ToggleSwitch";

        class App extends Component {
        render() {
          return (
          <React.Fragment>
            <ToggleSwitch label="Notifications" />
            <ToggleSwitch label="Subscribe" />
          </React.Fragment>
          );
        }
        }
        export default App;
***/
//gutter above
//needed below

//end updtaes for toggle switch


const App = () => {
  const {
    pomodoro,
    executing,
    startAnimate,
    children,
    startTimer,
    pauseTimer,
    updateExecute,
    setCurrentTimer,
    SettingsBtn,
  } = useContext(SettingsContext);

  useEffect(() => {
    updateExecute(executing);
  }, [executing, startAnimate]);

  return (
    
    <div className="container">
      
      {/* <ConfigVert /> */}
      {/* <div class="bg-image"></div> */}

{/* <div class="bg-text"> */}
  {/* <h1>I am John Doe</h1> */}
  {/* <p>And I'm a Photographer</p> */}
      {/* <h1>DoubleDare</h1> */}
{/* </div>  */}
      <img src ={logoImage1} className="logoz"/>
      {/* <img src ={logoImage2} /> */}
      {/* <img src ={logoImage3} /> */}
      {/* <img src ={logoImage4} /> */}
      {/* <img src ={logoImage5} /> */}
   
    <h1>Doe Clocker</h1>
    {pomodoro == 0 ? (
      <SetPomodoro />
      ) : (
        <div>
        <ul className="labels">
        <li>
        <Button
        title="🍅"
        activeClass={
          executing.active === "work" ? "active-label" : undefined
        }
        _callback={() => setCurrentTimer("work")}
        />
        </li>
        <li>
        <Button
        title="🟨"
        activeClass={
          executing.active === "short" ? "active-label" : undefined
        }
        _callback={() => setCurrentTimer("short")}
        />
        </li>
        <li>
        <Button
        title="🖲"
        activeClass={
          executing.active === "long" ? "active-label" : undefined
        }
        _callback={() => setCurrentTimer("long")}
        />
        </li>
        </ul>
        <Button title="Settings" _callback={SettingsBtn} />
        {/* <Config /> */}
        <Profile />
        {/* { document.body.clientHeight<300? <Config/>:<ConfigVert/>} */}
        {/* <ConfigVert /> */}
        <div className="timer-container">
        <div className="time-wrapper">
        <CountdownAnimation
        key={pomodoro}
        timer={pomodoro}
        animate={startAnimate}
        >
        {children}
        </CountdownAnimation>
        </div>
        </div>
        <div className="button-wrapper">
        <Button
        title="Start"
        activeClass={!startAnimate ? "active" : undefined}
        _callback={startTimer}
        />
        <Button
        title="Pause"
        activeClass={startAnimate ? "active" : undefined}
        _callback={pauseTimer}
        />
        </div>
        </div>
        )}
        
        <h3>A Pomodoro Timer</h3>
        <small>Made With ❤️ + ⚛️</small>
        <h4>by</h4>
        <img src ={logoImageX} className="logoz" />
        <h4>AaronDC</h4>

        <ButtonGrid />

        </div>
        
        );
      };
      
      export default App;
      