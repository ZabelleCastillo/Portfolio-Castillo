import React from "react";
import { motion } from "framer-motion";
import Button from "@material-ui/core/Button";

function AnimatableDiv() {
  return (
    <motion.div
      className="animatable"
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 }
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Button size="large" className="animatable">
        Button
      </Button>
    </motion.div>
  );
}

export default AnimatableDiv;