import React from "react";
import { Button } from 'reactstrap';


export default function Discription() {
    
    const divStyle = {
        margin: '0px 35px',
    };
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
    const p1 ={
        margin: '0px 0px 0px 35px',
        display:'flex',
        textAlign:'center',
        fontSize: '18px' ,
        color:'#333333',
    };    
    const contact ={
        backgroundColor:'#D70F64',
    }     

    return (
        <div style={divStyle}> <br/><br/><br/><br/>
            <h4 style={h1}>ABOUT US</h4>
            <p style={p1}>For us, it's not just about bringing you good food from your
                favourite restaurants. It's about making a connection, which is
                why we sit down with the chefs, dreaming up menus that will arrive
                fresh and full of flavour. Try us!</p> <br/><br/>
            <Button style={btn} color="danger">Learn More</Button>{' '}  <br/> <br/>    
            <br/><br/><br/><br/><br/><br/>
        </div>
    )
}
