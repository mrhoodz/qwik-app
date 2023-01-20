/** @jsxImportSource react */

import { component$ } from "@builder.io/qwik";
import { qwikify$ } from "@builder.io/qwik-react";
import { motion } from "framer-motion";
import React from "react";

export const Test = qwikify$(({data}:any) => {
  const [show, setShow] = React.useState("hello");

  return (
    <motion.h2
      onClick={() => {
        setShow("ndeipi");
      }}
      whileHover={{ color: "green" }}
    >
      {data} Testing 1 2 
    </motion.h2>
  );
});
