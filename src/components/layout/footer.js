import React from "react";
import { Button } from 'reactstrap';


export default function Footer() {
    
    const h1 ={
        color: "#D70F64",
        textAlign:'center',
    };
    const h4 ={
        color: "white",
        textAlign:'center',
    };
    const btn ={
        margin: 'auto',
        display:'flex',
        backgroundColor:'#D70F64',
        border:'none' ,
        color: 'white',
        height:'10%',
        padding:'14px 100px'
        };
    const contact ={
        backgroundColor:'#D70F64',
    }     

    return (
        <div> <br/><br/>
            <Button style={btn} color="danger">More</Button>{' '}  <br/> 
        </div>
    )
}
