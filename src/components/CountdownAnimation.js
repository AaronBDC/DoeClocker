import React from "react";
import { useContext } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { SettingsContext } from "../context/SettingsContext";

const CountdownAnimation = ({ key, timer, animate, children }) => {
  const { stopAimate1 } = useContext(SettingsContext);
  const { stopAimate2 } = useContext(SettingsContext);
  const { stopAimate3 } = useContext(SettingsContext);

  return (
    <CountdownCircleTimer
      key={key}
      isPlaying={animate}
      isGrowing={true}
      // duration={timer * .60}
      duration={timer}
      colors={[
        ["#fee36b", 0.33],
        ["#d60015", 0.33],
        ["#6b86fe", 0.33],
      ]}
      strokeWidth={6}
      size={220}
      trailColor="#151932"
      onComplete={() => {
        stopAimate1();
      }}
    >
      {children}
    </CountdownCircleTimer>
    
  );
};

export default CountdownAnimation;

/****
 * 
 * backup of props
 *       colors={[
 *       ["#FE6F6B", 0.33],
 *       ["#FE6F6B", 0.33],
 *       ["#FE6F6B", 0.33],
 *     ]}
 * 
 * 
 * 
 */