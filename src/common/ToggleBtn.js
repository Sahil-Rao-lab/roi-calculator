import React from "react";
import '../index.css'

const ToggleBtn = (props) => {

    const elementStyle = {
        width : props.width || '2.2rem',
        height : props.height || '1.3rem',
        backgroundColor: props.bg || "#F8C400"
    }

    return (
        <div className="toggle_btn" style={elementStyle}>
            <div className="toggle_circle"></div>
        </div>
    )
}

export default ToggleBtn;