import React from 'react'

    const Practice = (callback) => {

    setTimeout(()=>{

        console.log("Hello");
        callback();
        
    },2000);
}
const second(()=>{

    console.log("Welcome");
    
});


Practice(second);


export default Practice

