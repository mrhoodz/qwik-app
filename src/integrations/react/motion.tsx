/** @jsxImportSource react */

import React from "react";
import { qwikify$ } from "@builder.io/qwik-react";
import { motion, useScroll } from "framer-motion";
import "./motion.scss";

export const Motion = qwikify$(() => {
  const { scrollYProgress } = useScroll();
  const [retra, setRetra] = React.useState(false);

  return (
    <>
      {/* <motion.h1 whileHover={{ color: "purple" }}>kkkkkkk haha</motion.h1> */}

      <motion.div
        animate={{ scaleX: 0.2 }}
        style={{ scaleX: scrollYProgress }}
        className="load"
      >
        .
      </motion.div>
    </>
  );
});

export const boot: any = (data: any) => {
  console.log("kkkk");
};
