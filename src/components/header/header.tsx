import { component$, useStylesScoped$ } from "@builder.io/qwik";
import { QwikLogo } from "../icons/qwik";
import styles from "./header.scss?inline";
import { Motion } from "~/integrations/react/motion";
import { Test } from "~/integrations/react/test";

export default component$(() => {
  useStylesScoped$(styles);

  return (

    <>
    <header>

      <div class="logoArea">
        <img id="logoPng" src="/logos/logoPng.svg" alt="logoPng" />
        <img
          id="logoText"
          class="desktop"
          src="/logos/logoText.svg"
          alt="logoText"
        />
      </div>

      <aside class="menu">

      <span></span>
      <span></span>
      <span></span>


      </aside>

    </header>

    <Motion client:visible />


    </>
  );
});
