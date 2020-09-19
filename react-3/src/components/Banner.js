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
  
   
   
  <motion.span className="logo"
    style={styles}
    animate={{ rotate: 360 }  }
    transition={{ duration: b }}>

<img className="logo1" src="https://images.unsplash.com/photo-1553604313-0ab9f355d4d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
     
 

  </motion.span>
  
);
export default Rotate;