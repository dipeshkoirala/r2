import React, { useState } from "react";
import { motion } from "framer-motion";

const styles = {
  borderRadius: 30,
  width: 70,
  height: 40,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  cursor: "pointer"
};

const variants = {
  active: {
    opacity: 1,
    background: "#7fffd4",
    x: "-30px",
    // scale: 1.5,
    color: "#333"
  },
  inActive: {
    opacity: 1,
    background: "#f95c5c",
    x: "30px",
    scale: 1,
    color: "white"
  }
};

const Toggle = () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <motion.div
      onClick={() => setToggle(!isToggled)}
      style={styles}
      animate={isToggled ? "active" : "inActive"}
      variants={variants}
    >
      <span>{isToggled ? "ON" : "OFF"}</span>
      {isToggled? document.body.classList.add('dark-mode'):document.body.classList.remove('dark-mode')}
      <div
          
          className={isToggled ? "toggle toggled" : "toggle"}
        /> 
    </motion.div>
  );
};
export default Toggle;