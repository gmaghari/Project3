import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function UpdateButton (props) {
    return (
        <button className="update-btn" {...props} role="button" tabIndex="0">
            {props.display} Update
        </button>

    )
}

export default UpdateButton