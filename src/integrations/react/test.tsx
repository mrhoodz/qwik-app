
import { component$ } from "@builder.io/qwik";
import { qwikify$ } from "@builder.io/qwik-react";
import React from "react";
import { Motion } from "./motion";

export const Test = component$( () => {

  return (


<>


<Motion client:visible/>

</>

  );
});
