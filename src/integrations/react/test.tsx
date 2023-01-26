import { Motion } from "./motion";
import { component$ } from "@builder.io/qwik";

export const Test = component$(() => {
  return (
    <>
      <Motion client:visible />
    </>
  );
});
