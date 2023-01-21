/** @jsxImportSource react */

import React from "react";
import {
  $,
  PropFunction,
  component$,
  useStore,
  useClientEffect$,
} from "@builder.io/qwik";
import { qwikify$ } from "@builder.io/qwik-react";
import { motion } from "framer-motion";

export const Motion = qwikify$(({ data }: any) => {
  // console.log("wow")

  return (
    <>
      {/* //tenary operator */}
      {/* data.data === "hello" ? <motion.div */}
      {data < 3 ? (
        <motion.h1
          // onClick={$(() => boot(data))}
          initial={{ scale: 0.9 }}
          whileHover={{ scale: 1.2, x: 120 }}
          // onHoverStart={  () => console.log("start") }
          exit={{ scale: 0.9 }}
          // whileHover={{ color: "red" }}
        >
          {data}
        </motion.h1>
      ) : (
        <motion.h1
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          whileHover={{ color: "red" }}
        >
          {"go it"}
        </motion.h1>
      )}
    </>
  );
});

// export const boot: any = (data: any) => {
//   console.log(data);
//   alert("pin you");

//   // console.log("hey mama l see yah");
// };
