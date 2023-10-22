import React from 'react'
import "./index.css";
import {Link} from "react-router-dom"

const NotFound = () => {
  return <>
    <h1 style={
        {
            textAlign: "center",
            marginTop: "10px",
            fontSize: "50px",
            color: "#c3f6f6"
        }
    }>This page does not exist</h1>
   <Link to="/"><button>Go to home page</button></Link> 
  </>
}

export default NotFound;