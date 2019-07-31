import React from "react"   
import Avatar from 'react-avatar'
import Select from './Select'
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function MainBox(){
    
    function saveContent(){
        alert("Your content has been saved! ")
    }


    return (
     <div className="centerBox">
                
        <div className="centerBox2">
        <Avatar size="30px" round="50px" src="https://scontent.fotp3-3.fna.fbcdn.net/v/t1.0-9/20729309_1627154757357837_8054004274466036428_n.jpg?_nc_cat=108&_nc_oc=AQmnoDP2OqAIKxjZ1SkARmpCES5TE0y3DkoQUBmiPezrPAQYyGoy1ctCtFKWZu4c7XQ&_nc_ht=scontent.fotp3-3.fna&oh=0ee8d15a34147e08081d7798d882d516&oe=5DA9E23A" />
        <p id="questTitle">Sasu Catalin-Gabriel</p>
        </div>
        
        
       
        <hr/>
 
        <div className="centerBox2">
            <p id="questTitle">Influencer Fee</p>
            <input className="inputTip1" defaultValue="1500$"></input> 
            <p id="answer">How much are you paying SCG for the agreed deliverables?</p>
        </div>

        <div className="centerBox2">
            <p id="questTitle">Usage Fee</p>
            <input className="inputTip1" defaultValue="1500$"></input> 
            <p id="answer">Are you paying SCG a usage fee for this content? </p>
        </div>

        <div className="centerBox2">
            <p id="questTitle">Total Fee:</p>
            <span>3000$ </span> 
        </div>
        <hr/>



        <div className="centerBox2">
            <p id="questTitle">Social deliverables</p>
            <p id="answer">What posts have you asked SCG to do? </p>
        </div>
        
        


        <div className="centerBox2">
            <p id="SocialHub">INSTAGRAM</p>
            <Select value1="Story" value2="Post" value3="12/2/19"/>
            <Select value1="Story" value2="Post" value3="13/2/19"/>
            <Select value1="Post" value2="Story" value3="14/2/19"/>
            <Select value1="Post" value2="Story" value3="15/2/19"/>
            <button className="btn1"><FontAwesomeIcon icon={faPlus}/> Add post</button>
        </div>

        <div className="centerBox2">
            <p id="SocialHub">YOUTUBE</p>
            <Select value1="Video" value2="YoutubePost" value3="21/02/19"/>
            <button className="btn1"><FontAwesomeIcon icon={faPlus}/> Add post</button>
        </div>


        <div className="centerBox2">
            <p id="SocialHub">FACEBOOK</p>
            <Select/>
            <button className="btn1"><FontAwesomeIcon icon={faPlus}/> Add post</button>
        </div>

        
        <div className="centerBox2">
            <p id="SocialHub">OTHER SOCIAL MEDIA</p>
            <div className="parentDiv">
                
                    <div>
                        <select className="inputTip2" type="text">
                            <option value="" selected disabled hidden >Select social network</option>
                            <option value="LinkedIn"> LinkedIn</option>
                            <option value="MySpace"> MySpace</option>
                            <option value="WhatsApp"> WhatsApp</option>
                        </select>
                    </div>
                    <div className="divtip3"> 
                        *We were unable to track these social networks at the moment, but we will take this into account when we break down campaign spend.
                    </div>
            </div>
            <button className="btn1"><FontAwesomeIcon icon={faPlus}/> Add social network</button>
        </div>

        <hr/>
        <div className="centerBox2">
            <p id="questTitle">Other paid content</p>
            <p id="answer">Have you asked SCG to create any futher content? </p>


            <div className="divMare">

                <div className="div3"> 
                    <span id="span1"><input className="check" type="checkbox"/>Event</span>
                    <span id="span1"><input className="check" type="checkbox"/>Newsletter</span>
                 </div>

                <div className="div3">
                    <span id="span1"><input className="check" type="checkbox"/>Infleuncer blog content</span>
                    <span id="span1"><input className="check" type="checkbox"/>In-store appearance</span>
                </div>


                <div className="div3">
                    <span id="span1"><input className="check" type="checkbox"/>Brand Website Content</span>
                    <span id="span1"><input className="check" type="checkbox" checked/>Other</span>
                </div>


            </div>
            <input className="inputTip2" type="text" value="Some form of paid content"></input>
        </div>   
        
        <hr/>     

        <div className="centerBox3">
                <button className="btn2" type="button">CANCEL</button>
                <button className="btn3" type="button" onClick={saveContent}>SAVE</button> 
        </div>
     </div>
    )
}

export default MainBox