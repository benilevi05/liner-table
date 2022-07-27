import React from 'react'
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
        <button onClick={props.onClick} style={{ backgroundColor: props.bcolor, color: props.color, border: "none", borderRadius: "9px", fontSize: "15px", display: "inline-block", cursor: "pointer", padding: "10px 20px" }}>{props.text}</button>
    )
}

Button.defaultProps = {
    text: "Button Text",
    bcolor: "#09116E",
    color: "#ffffff"
}

Button.propTypes = {
    text: PropTypes.string,
    bcolor: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button