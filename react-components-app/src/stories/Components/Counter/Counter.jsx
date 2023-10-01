import { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from "../Button/Button";

export default function Counter( {primary
        , color     
        , size
        , labelFontSize
        , foreColor
        , ...props} ) {
    
    const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
    
    const [count, setCount] = useState(0);
    //const setCount = (val) => (count = val);

    const handleOnClick = (evtType) => {
        
        if (evtType === 'ADD') {
            setCount(count+1)
            return;
        }
        setCount(count-1)
    }

    return (

        <>
            <span style={{color, labelFontSize}}  >Counter : {count} </span>
            <br />
            <Button 
                label="+" 
                onClick = {() => handleOnClick("ADD") } 
                backgroundColor="#2B860B" 
                Color= {foreColor}
                className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
                />
            <Button 
                label="-" 
                onClick = {() => handleOnClick("SUBTRACT") } 
                backgroundColor="#2B860B" 
                color="#FFFFFF"
                className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
                />
        </>

    )
}

Counter.propTypes ={
    color: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    labelFontSize : PropTypes.string,
    foreColor : PropTypes.oneOf(['white', 'red', 'black']),
}
