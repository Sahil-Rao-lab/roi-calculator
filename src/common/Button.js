import React from "react";

const Button = (props) => {

    const elementStyle = {
        padding: props.padding || '.8rem 1.5rem',
        borderRadius: props.radius || '30px',
        outline: 'none',
        border: props.border || 'none',
        cursor: 'pointer',
        backgroundColor: props.bg || '',
        fontWeight: props.weight || 'bold',
        margin : props.margin || '1rem .5rem 1rem 0',
        color: props.color || '#000',
    }

    return (
        <button style={elementStyle}>{props.children}</button>
    )
}

export default Button;