import React from "react"

function Select(props){
    
    const val = props.value1
    if (val!=null)
    {
    return (
        <div>
        <select className="inputTip2" type="text">
            <option value={props.value1}>{props.value1}</option> 
            <option value={props.value2}>{props.value2} </option>  
        </select>
        <select className="inputTip3" type="text">
            <option value={props.value3}>{props.value3}</option>
            <option value="13/2/19">13/2/19</option>
            <option value="14/2/19">14/2/19</option>
            <option value="15/2/19">15/2/19</option>
        </select>
    </div>
    )}
    else
    return (
        <div>
            <select className="inputTip2" type="text">
            <option value="" selected disabled hidden >Select post type</option>
            <option value="Check-in">Check-in</option> 
            <option value="Share">Share </option>  
            <option value="Post">Post </option> 
            <option value="Photo">Photo </option> 
        </select>
        <select className="inputTip3" type="text">
            <option value="" selected disabled hidden >Liverdate</option>
            <option value="12/2/19">12/2/19</option>
            <option value="13/2/19">13/2/19</option>
            <option value="14/2/19">14/2/19</option>
            <option value="15/2/19">15/2/19</option>
        </select>
        </div>
    )

}

export default Select