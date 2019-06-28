import React from "react";
import { Button } from 'reactstrap';


export default function Contact() {

    const h4 = {
        color: "white",
        textAlign: 'center',
    };
    const btn = {
        margin: 'auto',
        display: 'flex',
        backgroundColor: '#D70F64',
        border: 'none',
        color: 'white',
        height: '10%',
        padding: '14px 100px'
    };
    const p2 = {
        margin: '0px 0px 0px 35px',
        display: 'flex',
        textAlign: 'center',
        fontSize: '18px',
        color: 'white',
    };

    const contact = {
        padding:'0px 35px',
        backgroundColor: '#D70F64',
        
    }

    return (
        <div style={contact}>
        <br/><br/>
        <div>
            <h4 style={h4} >Contact</h4><br />
            <p style={p2}>It's food lovers like you who inspire us to do what we do.
            Your comments, ideas and questions push us to go that extra
            mile, every time. So drop us a line!</p> <br />
            <Button style={btn} outline color="waring">GET IN TOUCH</Button>
        </div><br/><br/>
        </div> 
    )
}
