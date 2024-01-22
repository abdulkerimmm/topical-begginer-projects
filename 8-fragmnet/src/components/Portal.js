
import React from "react";
import  ReactDOM  from "react-dom";

const Portal = ({target, text}) => {
  return ReactDOM.createPortal(
            <div>
                merhatargetba ben target hedef {text}
            </div>,target )
}

export default Portal;