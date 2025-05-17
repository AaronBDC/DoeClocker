// Filename: ./components/ToggleSwitch.js

// import React from "react";
import React, { useEffect, useState } from "react";
import "./ToggleSwitch.css";



const ToggleSwitch = ({ label }) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = () => {
        console.log("!isChecked.0=" + !isChecked);
        setIsChecked(!isChecked);
        console.log("!isChecked.1=" + !isChecked);
        switch(!isChecked){
            case true:
                console.log('sec');
                break;
            case false:
                console.log('min');
                break;
        }
      };

return (
	<div className="container2">
	{label}{" "}
	<div className="toggle-switch">
		<input type="checkbox" className="checkbox" checked={isChecked} onChange={handleChange}
			name={label} id={label} />
		<label className="label" htmlFor={label}>
		<span className="inner" />
		<span className="switch" />
		</label>
        <div className="message-box">
            {isChecked ? "sec" : "min"}
        </div>
	</div>
	</div>
);
};

export default ToggleSwitch;
