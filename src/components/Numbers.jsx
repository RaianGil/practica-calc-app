import React from "react";
import Button from "./Button";
import PropTypes from 'prop-types';

// optizando codigo
const renderButtons = onClickNumber => {
    var numbers = [7,8,9,4,5,6,1,2,3,0]
    return numbers.map(num => <Button text={num.toString()} clickHandler={onClickNumber} key={num}/>)
} 
const Numbers = ({onClickNumber}) => (
    <section className="numbers">
        {renderButtons(onClickNumber)}
    </section>
);

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
};

export default Numbers