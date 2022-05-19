import React from "react";
import Button from "./Button";
import PropTypes from 'prop-types';

const Functions = ({onContentClear, onDelete}) => (
    <section className="functions">
        <Button text="clear" type="button-long-text" clickHandler={onContentClear} />
        <Button text="&larr;" clickHandler={onDelete} />
    </section>
);

Functions.propTypes = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Functions;