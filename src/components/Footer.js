import React from "react"
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer(){
    
    function submitFunction(){
        alert("Your application has been sent! <3")
    }


    return (
      <div>
          <footer>
              <hr/>
              <button type="buton" className="backButton"><FontAwesomeIcon icon={faAngleLeft} />BACK</button>
              <button type="button" className="submitButton" onClick={submitFunction}> SUBMIT </button>
          </footer>
          
      </div>
    )
}

export default Footer