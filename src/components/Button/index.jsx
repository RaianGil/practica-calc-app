// importar React
import React from "react";
import PropTypes from "prop-types";
import './Button.css';

// component funcional
const Button = ({type, text, clickHandler}) => (
        <button className={type} onClick={() => {
            console.log("onClick en el Button");
            clickHandler(text);
        }}>
            <span>{text}</span>
        </button>
);

// const Button = ({type, text, clickHandler}) => {
//     return (
//         <button className={type} onClick={() => {
//             console.log("onClick en el Button");
//             clickHandler(text);
//         }}>
//             <span>{text}</span>
//         </button>
//     )
// };

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
};

// exportacion
export default Button