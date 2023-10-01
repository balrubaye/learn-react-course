import { useState } from 'react';
import { FaStar} from 'react-icons/fa';
import PropTypes from 'prop-types';
import "./Rating.css";

const Star = ({selected, onSelect = (f) => f }) =>  
    (
    <FaStar className= "star"
        color={selected ? "#FFCB45" : "#000000" }
        onClick={onSelect}
    />

    );

const Rating = ({ number = 5}) => {

    const [selected, setSelected] = useState(-1);

    return [...Array(number)].map(( n, i ) => ( 
        <Star key={i} onSelect={() => setSelected(i === selected ? -1 : i)}  selected={i <= selected}  />
    ));
};

Rating.propTypes = {
    number : PropTypes.number,
}

export default Rating;
