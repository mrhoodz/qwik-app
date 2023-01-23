import React from "react";
import { $, PropFunction, component$, useStore } from "@builder.io/qwik";
import "./style.css";

export const Try = component$(({ data }: any) => {
  // const start = useStore({ value: 1 });

  // data.value = 14;

  return (
    <div onClick$={() => tapper()} class={"hello"}>
      trying to understand {data.value}
    </div>
  );
});

export const tapper = () => {
  alert("reses");
};
