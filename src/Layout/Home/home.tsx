import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles/_home.scss?inline";

export default component$(function Home() {
  useStyles$(styles);

  return (
    <article id="Home">
      <aside>
        <h1>My name is Tino and design</h1>

        <p>
          {" "}
          Amazing websites, branding and neo-digital marketing projects for
          start ups and legacy businesses.
        </p>

        <div class="subtitle">
          <span class="html-only">Im</span> Based in South Africa, available
          worldwide
        </div>

        <div class="scroll">
          <span>SCROLL</span>

          <img src="/svg/scroll icon.svg" alt="scroll icon" />
        </div>
      </aside>

      <span>
        <section class="heroImg-area">
          <span class="shell">
            <img class="twink-left" src="/svg/twink left.svg" alt="" />
            <img class="twink-right" src="/svg/twink right.svg" alt="" />
          </span>

          <img class="hero-img" src="/hero-img.png" alt="hero-img" />
        </section>
      </span>
    </article>
  );
});