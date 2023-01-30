import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles/_home.scss?inline";

export default component$(function Home() {
  useStyles$(styles);

  return (
    <article id="Home">
      <aside>
        <h2 class="subtitle">DESIGNED TO THRIVE, DEVELOPED TO CONQUER</h2>

        <h1>DREAM CENTRIC DESIGN APPROACH</h1>

        <p>
          I will partner with you to understand and reveal the problems that
          your business has and create a digitally optimized backboned system
          for you.
        </p>

        <div class="scroll">
          <span>SCROLL</span>

          <img src="/svg/scroll icon.svg" alt="scroll icon" />
        </div>

        <img class="hero-img desktop" src=" " alt="hero image goes here" />
      </aside>
    </article>
  );
});
