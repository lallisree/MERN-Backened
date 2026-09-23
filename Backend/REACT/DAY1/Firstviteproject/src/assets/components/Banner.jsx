import { Component } from "react";

class Banner extends Component{

    render (){
        
        return <>
      <div style={{backgroundColor:"whit", padding:"30px",
      height:"300px"}}>
        <h2 style={{textAlign:"center"}}>React Definition</h2>
        <h3 style={{fontSize:"22px",textAlign:"center"}}>
            React is a JavaScript library for 
            building interactive user interfaces.<br></br>
            It helps developers create reusable components 
            for websites and apps.<br></br>
            React updates the page efficiently
             when content or data changes.<br></br>
             It lets developers break a page into small, reusable parts 
             called<br></br> components, such as a navbar, button, or form.</h3>
           </div>


       </>
    }

}

export default Banner