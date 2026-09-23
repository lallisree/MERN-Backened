import { Component } from "react";

class About extends Component{
    render(){

        return <>

        <div style={{backgroundColor:"lightblue",padding:"50px",height:"200px"}}>
            <h2 style={{textAlign:"center"}}><u>About react</u></h2>
           <p style={{textAlign:"center"}}>
           It uses reusable components—such as buttons, menus,
            and forms—to organize the interface. When data changes, <br></br>
           React updates the relevant parts of the page.
           React uses a declarative approach, so developers describe
           how the page should look and React updates it when data changes.<br></br>
           Its state and props features help components manage
           and share information,while its efficient <br></br>
           rendering helps create responsive user experiences.</p>

        </div>
        
        </>
    }
}

export default About