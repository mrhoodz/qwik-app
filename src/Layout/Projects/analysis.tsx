import { component$, useStyles$ } from "@builder.io/qwik";

import styles from "./styles/_analysis.scss?inline";

export default component$(function analysis() {
  useStyles$(styles);

  return (
    <article id="Analysis">
      <h2>Project analysis and solution summary👀</h2>

      <aside class="grid">
        <span class="analysis-card">Strength</span>
        <span class="analysis-card">Weaknesses</span>
        <span class="analysis-card">Opportunities</span>
        <span class="analysis-card">Threats</span>
      </aside>

      <div class="talk-btn">LETS TALK</div>

      <div id="fact">
        <img id="bulb" src="/svg/Icon ionic-ios-bulb.svg" alt="bulb here" />

        <aside>
          <h3>Did you know</h3>
          <p>
            A website users attention span lies somewhere around eight seconds.
          </p>
        </aside>
      </div>

      <div id="analysis-hero" class="desktop">
        <img src="" alt="image goes here" />
      </div>
    </article>
  );
});
