/** @jsxImportSource react */

// import { component$, useStyles$ } from "@builder.io/qwik";

import "./_project-card.scss";
// import { qwikify$ } from "@builder.io/qwik-react";

export default function projectCard() {
  return (
    <>
      <article className="placeholder">
        <div className="project-card">
          <div className="project-preview">
            <img src="/projects/zongestu (Large).jpg" alt="project here" />
          </div>

          <div className="project-info">
            <div className="info-details">
              <h2>FashionHub</h2>

              <p>2021</p>
            </div>

            <div className="view-button">View Project</div>
          </div>
        </div>
      </article>
    </>
  );
}