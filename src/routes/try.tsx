import React from "react";
import { $, PropFunction, component$, useStore } from "@builder.io/qwik";

export const Try = component$(({data}:any) => {
  const start = useStore({ value: 1 });


  const up = component$(() => {
    // console.log("up")

    return <>h1</>;
  });

  return <div>trying to understand {data.count}</div>;
});
