import React from "react";
import { motion } from "framer-motion";


const styles = {
  background: "blue",
 
border:"1px solid red",
  borderRadius: 30,
  width: 200,
  height: 200,
  margin: "auto",
  float:"center",
  opacity:1,
  
};
const a=[1,2,3,4,5];
let b=Math.random(a)

 const Rotate = () => (
  
   
   
  <motion.span className="logo login-container bg-dark col-1 p-5 float-left p-2"
    style={styles}
    animate={{ rotate: 360 }  }
    transition={{ duration: b }}>

<img className="logo1" src="https://images.unsplash.com/photo-1541795021-f8b60a1a456d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="meditate"/>
     
 

  </motion.span>
  
);
export default Rotate;