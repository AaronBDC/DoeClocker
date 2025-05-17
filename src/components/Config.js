import React from 'react';
import ReactSlider from 'react-slider';

const Config = ({title, activeClass, _callBack }) =>{
    return(
        <span>
            &nbsp;
            &nbsp;
            <ReactSlider
                className="horizontal-slider"
                marks
                markClassName="example-mark"
                min={0}
                max={9}
                step={1}
                thumbClassName="example-thumb"
                trackClassName="example-track"
                renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
            />
        </span>
    );
};
export default Config;