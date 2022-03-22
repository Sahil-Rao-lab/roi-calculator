import React from "react";

const Reactangle = (props) => {

    const elementStyle = {
        padding: props.padding || '1rem',
        textAlign: props.align || 'right',
        fontWeight: props.weight || 'bolder',
        borderRadius: props.radius || '10px',
        width: props.width || '100%',
        border: props.border || '1px solid #ECECEC',
        fontSize : props.size || '1.5rem',
        backgroundColor : props.bg || '#ECECEC',
        margin : props.mg || '',
        color : props.color || '#000'
    }
    
    return (
        <div style={elementStyle} id={props.id || ""} onClick={props.click}>
            {props.children}
        </div>
    )
}

export default Reactangle;