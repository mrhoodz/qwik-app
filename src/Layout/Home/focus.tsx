import { component$, useStyles$ } from "@builder.io/qwik";
import styles from "./styles/_focus.scss?inline";

export default component$(function Focus({}) {
  useStyles$(styles);

  return (
    <article id="focus">
      <h2>Focus areas</h2>

      <aside>
        <div class="focus-card">
          <div class="numtitle">01</div>

          <div class="title">UI/UX Design</div>

          <div class="subtitle">Impact driven design</div>
        </div>
      </aside>

      <p class="p-content">
        I will partner with you to understand and reveal the problems that your
        business has and create a digitally optimized backboned system for you.
      </p>

      <div class="talk-btn">LET'S TALK</div>
    </article>
  );
});
