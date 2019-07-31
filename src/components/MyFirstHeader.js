import React from "react"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header1(){
    
    return (
      <div>
          <p id="left-part">
            <span className="text1">Albus </span> 
            <span className="text2">Campaigns </span>
            <span className="text3">Hall of fame </span>
          </p>

          <p id="right-part">
            <span className="text4">Notifications </span><span className="punct1"> </span>
            <span className="text5">John Smith <FontAwesomeIcon icon={faAngleDown} /> </span>
          </p>
          
      </div>
    )
}

export default Header1